import { Table,Column,DataType,Model, CreatedAt } from "sequelize-typescript";

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
    NumberPhone: string;

    @Column({type: DataType.BOOLEAN, defaultValue:false})
    Banned: boolean;

    @Column({type: DataType.INTEGER, allowNull:false, unique:true})
    PassportSeries: number;

    @Column({type: DataType.INTEGER, allowNull:false, unique:true})
    PassportNumber: number;

    @Column({type: DataType.INTEGER, allowNull:false, unique:true})
    Balance: number;


}