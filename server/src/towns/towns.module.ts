import { Module } from '@nestjs/common';
import { TownsController } from './towns.controller';

@Module({
  controllers: [TownsController]
})
export class TownsModule {}
