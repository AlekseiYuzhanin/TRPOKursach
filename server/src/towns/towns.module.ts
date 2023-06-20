import { Module } from '@nestjs/common';
import { TownsController } from './towns.controller';
import { TownsService } from './towns.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Towns } from './towns.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [TownsController],
  providers:[TownsService],
  imports:[
    SequelizeModule.forFeature([Towns,User])
  ],
  exports:[
    TownsService
  ]
})
export class TownsModule {

}
