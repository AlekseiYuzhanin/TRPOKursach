import { Module, forwardRef } from '@nestjs/common';
import { TownsController } from './towns.controller';
import { TownsService } from './towns.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Towns } from './towns.model';
import { User } from 'src/users/users.model';
import { Calls } from 'src/calls/calls.model';

@Module({
  controllers: [TownsController],
  providers:[TownsService],
  imports:[
    SequelizeModule.forFeature([Towns,User,Calls]),
  ],
  exports:[
    TownsService
  ]
})
export class TownsModule {

}
