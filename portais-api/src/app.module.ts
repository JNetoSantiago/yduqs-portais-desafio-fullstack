import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnrollModule } from './enroll/enroll.module';
import { OffersController } from './offers/offers.controller';
import { OffersModule } from './offers/offers.module';
import { OffersService } from './offers/offers.service';

@Module({
  imports: [OffersModule, EnrollModule],
  controllers: [AppController, OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
