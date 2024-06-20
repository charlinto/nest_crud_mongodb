import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class craeteUserDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsString()
    @IsOptional()
    displayName?: string;
}