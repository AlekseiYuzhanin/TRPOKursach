import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs'
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {
        
    }
    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("Client")
        const hashPassword = await bcrypt.hash(user.Password,5)
        await user.$set('roles',[role.RoleId])
        user.roles = [role];
        user.Password = hashPassword;
        user.save();
        return user;
    }
    
    async getAllUsers(){
         const users = await this.userRepository.findAll({include:{all:true}});
         return users;
    }

    async getSingleUser(UserId: number){
        const user = await this.userRepository.findOne({where: {UserId},include:{all:true}})
        return user;
    }

    async getUserByLogin(Login:string){
        const user = await this.userRepository.findOne({where: {Login},include:{all:true}})
        return user;
    }

    async banUser(dto: BanUserDto){
        const user = await this.userRepository.findByPk(dto.UserId)
        user.Banned = true;
        await user.save();
        return user;
    }
}
