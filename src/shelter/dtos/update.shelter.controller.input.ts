import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()  
    @Length(10,11)
    @IsNotEmpty()  
    whatsapp: string
    @IsString()
    @IsNotEmpty()
    @Length(10,11)
    @IsNumber()
    phone: string
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}