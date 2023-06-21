import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Calls } from './calls.model';
import { CreateCallDto } from './dto/create-call.dto';
import { User } from 'src/users/users.model';
import { Towns } from 'src/towns/towns.model';

@Injectable()
export class CallsService {
    constructor(@InjectModel(Calls) private callsRepository: typeof Calls,
                @InjectModel(User) private userRepository: typeof User,
                @InjectModel(Towns) private townRepository: typeof Towns){

    }

    async createCall(dto: CreateCallDto){
        const call = await this.callsRepository.create(dto);
        return call
    }

    async calculateCallPrice(CallId: number){
        const call = await this.callsRepository.findOne({where: {CallId},include: [{model: this.userRepository},{model:this.townRepository}]})
        return call.town.NightCost * call.CallDuration * call.town.Discont;
    }

}
