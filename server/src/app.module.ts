import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { RolesController } from './roles/roles.controller';
import { UserRoles } from './roles/user-roles.model';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TownsService } from './towns/towns.service';
import { TownsController } from './towns/towns.controller';
import { TownsModule } from './towns/towns.module';
import { CallsService } from './calls/calls.service';
import { CallsModule } from './calls/calls.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    UserRoles,
    AuthModule,
    TownsModule,
    CallsModule
  ],
  providers: [AuthService, TownsService, CallsService],
  controllers: [AuthController, TownsController],
})
export class AppModule {}
