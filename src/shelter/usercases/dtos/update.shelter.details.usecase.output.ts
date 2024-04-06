export default class UpdateShelterDetailsUseCaseOutput {
    Name: string;
    WhatsApp: string;
    Email: string;
    Phone: string;  
    createdAt: Date;
    updateAt: Date;

    constructor(data: Partial<UpdateShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)
    }

}