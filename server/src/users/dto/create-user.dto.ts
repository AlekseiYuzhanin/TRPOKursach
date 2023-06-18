import { IsString,Length,IsPhoneNumber, IsPassportNumber } from "class-validator";

export class CreateUserDto{
    readonly lastname:string;
    readonly firstname:string;
    readonly middlename?:string;
    readonly login:string;
    readonly ballance:number;
    readonly phonenumber:string;
    readonly password:string;
    readonly passportnumber:number

}