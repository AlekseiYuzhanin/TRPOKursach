import { Column, DataType, Table,Model } from "sequelize-typescript";

interface RoleCreatingAttribute{
    value: string;
    description:string;
}

@Table({tableName: 'roles',createdAt:false,updatedAt:false})
export class Role extends Model<Role,RoleCreatingAttribute>{
    @Column({type: DataType.INTEGER,unique:true, autoIncrement:true, primaryKey:true})
    RoleId: number;

    @Column({type: DataType.STRING, unique:true, allowNull:false})
    value:string;

    @Column({type: DataType.STRING, allowNull:false})
    description:string;
}