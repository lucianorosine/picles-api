import { IsNotEmpty, IsString, MaxLength,} from "class-validator";

export default class CreatedPetControllerInput{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    type:string;

    @IsString()
    @IsNotEmpty()
    size: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    bio: string;
}