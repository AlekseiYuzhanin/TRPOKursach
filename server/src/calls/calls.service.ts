import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Calls } from './calls.model';

@Injectable()
export class CallsService {
    constructor(@InjectModel(Calls) private callsRepository: typeof Calls){

    }

    
}
