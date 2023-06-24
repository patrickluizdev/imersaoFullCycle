import { Module } from '@nestjs/common';
import { AssetsController } from './assets/assets.controller';
import { OrdersController } from './orders/orders.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AssetsController, OrdersController],
  providers: [PrismaService],
})
export class AppModule {}
