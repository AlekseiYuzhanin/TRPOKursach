import { ApiProperty } from "@nestjs/swagger";
import { IsString,Length,IsPhoneNumber, IsPassportNumber } from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'Петров',description: 'Фамилия'})
    readonly lastname:string;
    @ApiProperty({example: 'Петр',description: 'Имя'})
    readonly firstname:string;
    @ApiProperty({example: 'Афанасьевич',description: 'Отчество'})
    readonly middlename?:string;
    @ApiProperty({example: 'qwerty123',description: 'Логин'})
    readonly login:string;
    @ApiProperty({example: 10000, description: ""})
    readonly ballance:number;
    @ApiProperty({example: '+79535045111',description: 'Номер телефона'})
    readonly phonenumber:string;
    @ApiProperty({example: 'qweasd123',description: 'Пароль пользователя'})
    readonly password:string;
    @ApiProperty({example: '5123593123',description: 'Серия и номер паспорта'})
    readonly passportnumber:number;

}