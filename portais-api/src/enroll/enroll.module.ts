import { Module } from '@nestjs/common';
import { EnrollRepository } from 'src/enroll/enroll.repository';
import { EnrollController } from './enroll.controller';
import { EnrollService } from './enroll.service';

@Module({
  controllers: [EnrollController],
  providers: [EnrollService, EnrollRepository],
})
export class EnrollModule {}
