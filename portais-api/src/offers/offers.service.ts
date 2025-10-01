import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.offer.findMany({
      include: { address: true },
    });
  }
}
