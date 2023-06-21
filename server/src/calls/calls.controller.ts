import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CreateCallDto } from './dto/create-call.dto';

@Controller('calls')
export class CallsController {
    constructor( private callsService:CallsService){

    }

    @Post('')
    createRole(@Body() createRoleDto: CreateCallDto){
        return this.callsService.createCall(createRoleDto);
    }

    @Get("/:CallId")
    calculateCallPrice(@Param('CallId') CallId:number){
        return this.callsService.calculateCallPrice(CallId)
    }

    @Get('')
    getAllCalls(){
        return this.callsService.getAllCalls()
    }
}
