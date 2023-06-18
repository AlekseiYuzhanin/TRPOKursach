import { Body, Controller, Post,Get,Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }

    @ApiOperation({summary: "User creation"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }

    
    @ApiOperation({summary: "Get single user by id"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get('/:UserId')
    getUserById(@Param('UserId') UserId:number){
        return this.usersService.getSingleUser(UserId);
    }

    @ApiOperation({summary: "Get single user by login"})
    @ApiResponse({status: 200})
    @Get('getUser/:Login')
    getUserByLogin(@Param('Login') Login:string){
        return this.usersService.getUserByLogin(Login);
    }

    @ApiOperation({summary: "Get single user by login"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post('/ban')
    banUser(@Body() dto:BanUserDto){
        return this.usersService.banUser(dto)
    }

}
