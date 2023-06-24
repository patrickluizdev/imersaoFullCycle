import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Asset } from '@prisma/client';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getAllAssets(): Promise<Asset[]> {
    return this.prismaService.asset.findMany();
  }

  @Post()
  async createAsset(
    @Body() assetData: { id: string; symbol: string },
  ): Promise<Asset> {
    return this.prismaService.asset.create({ data: assetData });
  }
}
