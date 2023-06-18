import { Controller,Body,Get,Post, Param, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('roles')
export class RolesController {
    constructor(private rolesService:RolesService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto){
        return this.rolesService.createRole(createRoleDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:value')
    getRole(@Param('value') value:string){
        return this.rolesService.getRoleByValue(value);
    }
}
