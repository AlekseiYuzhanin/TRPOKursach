import { Body, Controller, Post } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';

@Controller('calls')
export class CallsController {
    constructor( private callsService:CallsService){

    }

    @Post()
    createRole(@Body() createRoleDto: CreateCallDto){
        return this.callsService.createCall(createRoleDto);
    }
}
