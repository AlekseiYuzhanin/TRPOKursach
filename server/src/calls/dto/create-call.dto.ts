export class CreateCallDto{
    readonly UserId:number;
    readonly TownId: number;
    readonly DateOfCalling:Date;
    readonly CallDuration:number;
    readonly TimeOfCall:Date;
}