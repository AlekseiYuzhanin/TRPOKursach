import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TownsService } from './towns.service';
import { CreateTownDto } from './dto/create-town.dto';

@Controller('towns')
export class TownsController {
    constructor(private townsService: TownsService){}

    @Post('')
    createTown(@Body() createTownDto:CreateTownDto){
        return this.townsService.createTown(createTownDto)
    }

    @Get('/:TownTitle')
    getTownByLogin(@Param('TownTitle') TownTitle:string){
        return this.townsService.getTownByTitle(TownTitle)
    }
}
