import { Module, forwardRef } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from './user-roles.model';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Role,User,UserRoles]),
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
