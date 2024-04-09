export default class CreatedPetUseCaseInput{
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;

    constructor(data: Partial<CreatedPetUseCaseInput>){
        Object.assign(this, data);
    }

}