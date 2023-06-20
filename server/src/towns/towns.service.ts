import { Injectable } from '@nestjs/common';
import { Towns } from './towns.model';
import { CreateTownDto } from './dto/create-town.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TownsService {
    constructor(@InjectModel(Towns) private townRepository: typeof Towns){

    }
    
    async createTown(dto: CreateTownDto){
        const town = await this.townRepository.create(dto);
        return town;
    }

    async getTownByTitle(TownTitle: string){
        const town = await this.townRepository.findOne({where:{TownTitle},include:{all:true}})
        return town;
    }

    async getTownById(TownId: number){
        const town = await this.townRepository.findOne({where: {TownId}, include: {all:true}})
        return town;
    }
}
