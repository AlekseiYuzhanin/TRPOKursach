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

    getCallHours(hour:Date){
        hour.getHours()
        return hour;
    }

    async calculateCallPrice(CallId: number){
        const call = await this.callsRepository.
        findOne({where: {CallId},include: [{model: this.userRepository},
            {model:this.townRepository}]})
        const newTime = String(call.TimeOfCall).slice(0,2)
        if((Number(newTime) > 22  ) || (Number(newTime) > 0 && Number(newTime) <= 6)){
            return call.town.NightCost * call.CallDuration * call.town.Discont;
        }
        if((Number(newTime) > 7)  || (Number(newTime) < 21)){
            return call.town.DayCost * call.CallDuration * call.town.Discont;
        }
            
    }

    async getAllCalls(){
        const calls = await this.callsRepository.findAll();
        return calls;
    }

}
