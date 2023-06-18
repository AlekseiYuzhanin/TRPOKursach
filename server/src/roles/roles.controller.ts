import { Controller,Body,Get,Post, Param, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private rolesService:RolesService){}

    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto){
        return this.rolesService.createRole(createRoleDto);
    }

    @UseGuards(JwtAuthGuard)
    @Roles("Admin")
    @UseGuards(RolesGuard)
    @Get('/:value')
    getRole(@Param('value') value:string){
        return this.rolesService.getRoleByValue(value);
    }
}
