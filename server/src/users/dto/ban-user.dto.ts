import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto{
    @ApiProperty({example: '1',description: 'Номер пользователя'})
    readonly UserId: number;
}