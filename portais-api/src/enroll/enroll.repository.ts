import { Injectable } from '@nestjs/common';
import { CreateEnrollDto } from 'src/enroll/dto/create-enroll.dto';
import { Student } from './../../generated/prisma';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class EnrollRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEnrollDto): Promise<Student> {
    return this.prisma.student.create({
      data: {
        ...data,
        birthdate: new Date(data.birthdate),
      },
    });
  }
}
