import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersController } from './offers/offers.controller';
import { OffersModule } from './offers/offers.module';
import { OffersService } from './offers/offers.service';
import { EnrollModule } from './enroll/enroll.module';

@Module({
  imports: [OffersModule, EnrollModule],
  controllers: [AppController, OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
