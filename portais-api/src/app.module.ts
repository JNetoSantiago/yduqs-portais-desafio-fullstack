import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnrollModule } from './enroll/enroll.module';
import { OffersController } from './offers/offers.controller';
import { OffersModule } from './offers/offers.module';
import { OffersService } from './offers/offers.service';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: { colorize: true },
              }
            : undefined,
        level: process.env.LOG_LEVEL || 'info',
      },
    }),
    OffersModule,
    EnrollModule,
  ],
  controllers: [AppController, OffersController],
  providers: [AppService, OffersService],
})
export class AppModule {}
