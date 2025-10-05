import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PinoLogger } from 'nestjs-pino';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';

@ApiTags('Matrícula')
@Controller('enroll')
export class EnrollController {
  constructor(
    private readonly enrollService: EnrollService,
    private readonly logger: PinoLogger,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova matrícula' })
  create(@Body() createEnrollDto: CreateEnrollDto) {
    return this.enrollService.create(createEnrollDto);
  }
}
