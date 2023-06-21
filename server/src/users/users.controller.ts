import { Body, Controller, Post,Get,Param, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { BanUserDto } from './dto/ban-user.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
        
    }

    @ApiOperation({summary: "User creation"})
    @ApiResponse({status: 200})
    //@UseGuards(JwtAuthGuard)
    //@Roles("Admin")
    //@UseGuards(RolesGuard)
    @Post('')
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Getting all users"})
    @ApiResponse({status: 200})
    @Get('')
    getAll(){
        return this.usersService.getAllUsers();
    }

    
    @ApiOperation({summary: "Get single user by id"})
    @ApiResponse({status: 200})
    //@UseGuards(JwtAuthGuard)
    //@Roles("Admin")
    //@UseGuards(RolesGuard)
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

    @ApiOperation({summary: "Ban user"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post('/ban')
    banUser(@Body() dto:BanUserDto){
        return this.usersService.banUser(dto)
    }

    @Put('/:UserId')
    updateOperator(@Param('UserId') UserId:number,@Body()dto:UpdateOperatorDto){
        return this.usersService.updateOperator(UserId,dto)
    }

   @Put('/:UserId/increase/Ballance/')
   increaseBalance(@Param('UserId') UserId:number, @Body('amount') amount:bigint){
     return this.usersService.increaseUserBallance(UserId,amount);
   }

   @Put('/:UserId/decrease/Ballance/')
   decreaseBalance(@Param('UserId') UserId:number, @Body('amount') amount:bigint){
     return this.usersService.decreaseUserBallance(UserId,amount);
   }

}
