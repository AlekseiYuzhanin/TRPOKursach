export class CreateCallDto{
    readonly CallId:number;
    readonly UserId:number;
    readonly TownId: number;
    readonly DateOfCalling:Date;
    readonly CallDuration:number;
    readonly TimeOfCall:Date;
    readonly FinalPrice:bigint;
}