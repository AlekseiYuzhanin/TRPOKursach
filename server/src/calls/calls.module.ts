import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Towns } from 'src/towns/towns.model';
import { Calls } from './calls.model';
import { UsersModule } from 'src/users/users.module';
import { TownsModule } from 'src/towns/towns.module';


@Module({
  providers: [CallsService],
  controllers: [CallsController],
  imports: [
    SequelizeModule.forFeature([Calls,User,Towns]),
    UsersModule,
    TownsModule
  ],
  exports:[
    CallsService
  ]
})
export class CallsModule {}
