import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  @Post()
  async createOrder(
    @Body() orderData: { assetId: string; price: number },
  ): Promise<Order> {
    return this.prismaService.order.create({ data: orderData });
  }
}
