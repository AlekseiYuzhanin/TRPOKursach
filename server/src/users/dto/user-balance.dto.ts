import { ApiProperty } from "@nestjs/swagger";

export class UserBallanceDto{
    @ApiProperty({example: '1',description: 'Номер пользователя'})
    readonly UserId: number;
    @ApiProperty({example: '1',description: 'Номер пользователя'})
    readonly Ballance: number;
    readonly amount:number;
}