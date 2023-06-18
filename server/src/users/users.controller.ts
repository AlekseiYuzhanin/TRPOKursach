import { Body, Controller, Post,Get,Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    @Get('/:UserId')
    getUser(@Param('UserId') UserId:number){
        return this.usersService.getSingleUser(UserId);
    }

}
