import { Table,Column,DataType,Model, BelongsToMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { Towns } from "src/towns/towns.model";

interface UserCreationAttribute{
    login: string;
    password: string;
}

@Table({tableName:'users',createdAt:false,updatedAt:false})
export class User extends Model<User,UserCreationAttribute> {
    @Column({type: DataType.INTEGER,unique:true,autoIncrement:true, primaryKey:true})
    UserId: number;

    @Column({type: DataType.STRING, allowNull: false})
    LastName: string;

    @Column({type: DataType.STRING, allowNull: false})
    FirstName: string;

    @Column({type: DataType.STRING, allowNull: true})
    MiddleName: string;

    @Column({type: DataType.STRING,unique:true, allowNull:false})
    Login: string;

    @Column({type: DataType.STRING, allowNull: false})
    Password: string;

    @Column({type: DataType.STRING, allowNull:false, unique:true})
    PhoneNumber: string;

    @Column({type: DataType.STRING,allowNull:false})
    PhoneOperator: string;

    @Column({type: DataType.BOOLEAN, defaultValue:false})
    Banned: boolean;

    @Column({type: DataType.BIGINT, allowNull:false, unique:true})
    PassportNumber: bigint;

    @Column({type: DataType.FLOAT,defaultValue:0})
    Ballance: bigint;

    @ForeignKey(() => Towns)
    @Column({type: DataType.INTEGER})
    TownId:number;

    @BelongsTo(() => Towns)
    town: Towns[];

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}