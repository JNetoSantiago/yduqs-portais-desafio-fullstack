import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OffersService } from './offers.service';

@ApiTags('Cursos')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar os cursos disponíveis' })
  findAll() {
    return this.offersService.findAll();
  }
}
