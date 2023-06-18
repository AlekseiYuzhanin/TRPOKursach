import { Controller,Body,Get,Post, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private rolesService:RolesService){}

    @Post()
    createRole(@Body() createRoleDto: CreateRoleDto){
        return this.rolesService.createRole(createRoleDto);
    }

    @Get('/:value')
    getRole(@Param('value') value:string){
        return this.rolesService.getRoleByValue(value);
    }
}
