import { Table,Column,DataType,Model, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

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

    @Column({type: DataType.BOOLEAN, defaultValue:false})
    Banned: boolean;

    @Column({type: DataType.BIGINT, allowNull:false, unique:true})
    PassportNumber: bigint;

    @Column({type: DataType.FLOAT,defaultValue:0})
    Ballance: bigint;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}