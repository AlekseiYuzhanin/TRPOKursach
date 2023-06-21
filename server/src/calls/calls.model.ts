import { Column, DataType, Table,Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Towns } from "src/towns/towns.model";
import { User } from "src/users/users.model";

interface CallsCreationAttribute{
    CallId: number;
    UserId: number;
    TownId: number;
    DateOfCalling:Date;
    CallDuration:number;
    TimeOfCall:Date;
}

@Table({tableName: 'calls',createdAt:false,updatedAt:false})
export class Calls extends Model<Calls,CallsCreationAttribute>{
    @Column({type: DataType.INTEGER, unique:true,autoIncrement:true, primaryKey:true})
    CallId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull:false})
    UserId:number;

    @ForeignKey(() => Towns)
    @Column({type: DataType.INTEGER,  allowNull:false})
    TownId:number;

    @Column({type: DataType.DATE, allowNull:false})
    DateOfCalling:Date;

    @Column({type: DataType.INTEGER,  allowNull:true})
    CallDuration:number;

    @Column({type: DataType.TIME,  allowNull:true})
    TimeOfCall:Date;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Towns)
    town: Towns;
}