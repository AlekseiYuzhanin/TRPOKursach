import { Module } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { Towns } from 'src/towns/towns.model';
import { Calls } from './calls.model';

@Module({
  providers: [CallsService],
  controllers: [CallsController],
  imports: [
    SequelizeModule.forFeature([Calls,User,Towns])
  ]
})
export class CallsModule {}
