import { Injectable,HttpException,HttpStatus,UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService,
        private jwtService: JwtService){

    }

    async login( userDto:CreateUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }
    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByLogin(userDto.login)
        const passwordEquals = await bcrypt.compare(userDto.password, user.Password);
        if (user && passwordEquals){
            return user;
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }

    private async generateToken(user: User){
        const payload = {login: user.Login, id:user.UserId, roles:user.roles }
        return {
            token: this.jwtService.sign(payload)
        }
    }
}