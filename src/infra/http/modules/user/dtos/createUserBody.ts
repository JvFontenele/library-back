import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserBody {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    login: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
}