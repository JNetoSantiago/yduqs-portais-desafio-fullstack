import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { Prisma } from './../../generated/prisma';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Error';
    let field = '';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'object' && res['message'] ? res['message'] : res;
      error = exception.name;
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `Já existe um registro para este campo ${exception?.meta?.target}`;
          field = Array.isArray(exception.meta?.target)
            ? exception.meta.target.join(', ')
            : String(exception.meta?.target ?? '');
          error = 'UniqueConstraintError';
          break;
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = `Record to update not found.`;
          error = 'NotFoundError';
          break;
        default:
          status = HttpStatus.BAD_REQUEST;
          message = `Erro Prisma: ${exception.code}`;
          error = 'PrismaError';
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    return response.status(status).json({
      statusCode: status,
      error,
      message,
      field,
    });
  }
}
