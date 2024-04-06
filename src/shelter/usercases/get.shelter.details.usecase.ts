import { Inject } from "@nestjs/common";
import { IUseCase } from "../domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import ShelterTokens from "../shelter.token";
import isShelterRepository from "../interfaces/shelter.repository.interface";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: isShelterRepository,
    ){}    
    
    
    async run(): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRepository.get();
        // console.log(shelter)
        
        return new GetShelterDetailsUseCaseOutput({
         shelterName: shelter.name,
         shelterEmail: shelter.email,
         shelterPhone: shelter.phone,
         shelterWhatsApp: shelter.whatsapp,
         createdAt: shelter.createdAt,
         updateAt: shelter.updateAt,
        });
    }
}