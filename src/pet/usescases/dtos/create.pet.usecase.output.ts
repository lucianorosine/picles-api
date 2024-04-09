export default class CreatedPetUseCaseOutput{
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<CreatedPetUseCaseOutput>){
        Object.assign(this, data);
    }
}