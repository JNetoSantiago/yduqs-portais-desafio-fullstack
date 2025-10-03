import { Injectable } from '@nestjs/common';
import { EnrollRepository } from 'src/enroll/enroll.repository';
import { CreateEnrollDto } from './dto/create-enroll.dto';

@Injectable()
export class EnrollService {
  constructor(private readonly enrollRepository: EnrollRepository) {}

  create(createEnrollDto: CreateEnrollDto) {
    return this.enrollRepository.create(createEnrollDto);
  }
}
