import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Calls } from './calls.model';
import { CreateCallDto } from './dto/create-call.dto';
import { UsersService } from 'src/users/users.service';
import { TownsService } from 'src/towns/towns.service';

@Injectable()
export class CallsService {
    constructor(@InjectModel(Calls) private callsRepository: typeof Calls,
                private userService:UsersService, private townService:TownsService){

    }

    async createCall(dto: CreateCallDto){
        const call = await this.callsRepository.create(dto);
        const town = await this.townService.getTownById(1);
        return call;
    }


}
