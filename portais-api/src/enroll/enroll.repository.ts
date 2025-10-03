import { Injectable } from '@nestjs/common';
import { CreateEnrollDto } from 'src/enroll/dto/create-enroll.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from './../../generated/prisma';

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
