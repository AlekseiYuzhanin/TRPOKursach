import { Module,forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import {JwtModule} from '@nestjs/jwt'
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions:{
        expiresIn: '24h'
      }
    })
  ],
  exports: [JwtModule,AuthService]
})
export class AuthModule {}