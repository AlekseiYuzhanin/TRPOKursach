import { IsString,Length,IsPassportNumber,IsPhoneNumber } from "class-validator";

export class CreateUserDto{
    @IsPhoneNumber()
    readonly phonenumber:string;

    @Length(8,16,{message: "Password must be between 8 and 16 symbols"})
    @IsString({message: 'Password must be string'})
    readonly password:string;

    

}