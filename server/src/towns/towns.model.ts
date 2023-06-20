import { Column, DataType, Table,Model, HasMany } from "sequelize-typescript";
import { Calls } from "src/calls/calls.model";
import { User } from "src/users/users.model";

interface TownCreationAttribute{
    TownId: number;
    TownTitle: string;
    DayCost: number;
    NightCost:number;
    Discont:number;
}

@Table({tableName: 'towns',createdAt:false,updatedAt:false})
export class Towns extends Model<Towns,TownCreationAttribute>{
    @Column({type: DataType.INTEGER, unique:true,autoIncrement:true, primaryKey:true})
    TownId: number;

    @Column({type: DataType.STRING, unique:true, allowNull:false})
    TownTitle:string;

    @Column({type: DataType.FLOAT,  allowNull:false})
    DayCost:number;

    @Column({type: DataType.FLOAT, allowNull:false})
    NightCost:number;

    @Column({type: DataType.FLOAT,  allowNull:true})
    Discont:number;

    @HasMany(() => User)
    users: User[];

    @HasMany(() => Calls)
    calls: Calls[];
}