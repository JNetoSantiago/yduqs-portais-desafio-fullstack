import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Response } from 'express';
import { Prisma } from './../../generated/prisma';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaValidationExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        const message = `Já existe um registro para este campo ${exception?.meta?.target}`;
        response.status(status).json({
          statusCode: status,
          message,
          field: exception?.meta?.target,
        });
        break;
      }
      case 'P2025': {
        const status = HttpStatus.NOT_FOUND;
        const message = `Record to update not found.`;
        response.status(status).json({
          statusCode: status,
          message,
        });
        break;
      }
      default:
        super.catch(exception, host);
        break;
    }
  }
}
