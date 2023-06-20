import { Column, DataType, Table,Model } from "sequelize-typescript";

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

    @Column({type: DataType.FLOAT, unique:true, allowNull:false})
    DayCost:number;

    @Column({type: DataType.FLOAT, unique:true, allowNull:false})
    NightCost:number;

    @Column({type: DataType.FLOAT, unique:true, allowNull:false})
    Discont:number;
}