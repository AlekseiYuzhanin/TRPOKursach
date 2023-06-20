import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { Calls } from 'src/calls/calls.model';
import { CallsModule } from 'src/calls/calls.module';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        SequelizeModule.forFeature([User,Role,UserRoles,Calls]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports:[
        UsersService
    ]
})
export class UsersModule {

}
