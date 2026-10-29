import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductModule } from './modules/product/product.module.js';
import { ConfigModule } from './config/config.module.js';
import { DatabaseModule } from './database/database.module.js';
import { CommonModule } from './common/common.module.js';
import { MovementsModule } from './modules/movements/movements.module.js';
import { MovementsController } from './modules/movements/movements.controller.js';
import { MovementsService } from './modules/movements/movements.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'gestor-invenntario-saas',
    }),
    ProductModule,
    ConfigModule,
    DatabaseModule,
    CommonModule,
    MovementsModule,
  ],
  controllers: [AppController, MovementsController],
  providers: [AppService, MovementsService],
})
export class AppModule {}
