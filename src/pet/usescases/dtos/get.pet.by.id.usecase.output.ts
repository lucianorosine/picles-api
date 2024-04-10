export default class GetpPetByIdUseCaseOutput{
    id: string;
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;
    photo: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<GetpPetByIdUseCaseOutput>){
        Object.assign(this, data);
    }
}