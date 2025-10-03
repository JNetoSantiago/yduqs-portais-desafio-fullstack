import { Injectable } from '@nestjs/common';
import { CreateEnrollDto } from './dto/create-enroll.dto';
import { EnrollRepository } from './enroll.repository';

@Injectable()
export class EnrollService {
  constructor(private readonly enrollRepository: EnrollRepository) {}

  create(createEnrollDto: CreateEnrollDto) {
    return this.enrollRepository.create(createEnrollDto);
  }
}
