import { ApiProperty } from "@nestjs/swagger";

export class UpdateOperatorDto{
    @ApiProperty({example: '1',description: 'Номер пользователя'})
    readonly PhoneOperator: string;
}