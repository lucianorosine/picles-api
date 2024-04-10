import { Inject, Injectable } from "@nestjs/common";
import CreatedPetUseCaseInput from "./dtos/create.pet.usecase.input";
import { IUseCase } from "src/shelter/domain/iusecase.interface";
import CreatedPetUseCaseOutput from "./dtos/create.pet.usecase.output";
import PetTokens from "../pet.token";
import IPetRepository from "../pet.repository";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatedPetUseCaseInput, CreatedPetUseCaseOutput>{
   
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}
 
    async run (input: CreatedPetUseCaseInput): Promise<CreatedPetUseCaseOutput>{
        const newPet = await this.petRepository.create(input)
        return new CreatedPetUseCaseOutput({
            id: newPet._id,
            name:newPet.name,
            type: newPet.type,
            size: newPet.size,
            gender:newPet.gender,
            bio:newPet.bio,
            photo: newPet.photo,
            createdAt: newPet.createdAt,
            updatedAt: newPet.updatedAt,
        })
    }
}