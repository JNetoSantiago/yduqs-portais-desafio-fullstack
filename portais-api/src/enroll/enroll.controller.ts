import { Body, Controller, Post } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollService } from './enroll.service';

@Controller('enroll')
export class EnrollController {
  constructor(
    private readonly enrollService: EnrollService,
    private readonly logger: PinoLogger,
  ) {}

  @Post()
  create(@Body() createEnrollDto: CreateEnrollDto) {
    return this.enrollService.create(createEnrollDto);
  }
}
