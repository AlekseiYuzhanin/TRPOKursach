import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto{
    @ApiProperty({example: 'Admin',description: 'Значение роли'})
    readonly value:string;
    @ApiProperty({example: '1',description: 'Номер пользователя'})
    readonly userId:number;
}