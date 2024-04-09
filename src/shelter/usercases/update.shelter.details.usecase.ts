import { Inject, Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import { IUseCase } from "../domain/iusecase.interface";
import { ShelterRepository } from "../shelter.repository";
import { Shelter } from "../schemas/sjelter.schemas";
import ShelterTokens from "../shelter.token";
import IShelterRepository from '../interfaces/shelter.repository.interface';

@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput> {


    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository
    ) { }

    async run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        await this.shelterRepository.update(input)

        const shelter = await this.shelterRepository.get()

        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsApp: shelter.whatsapp,
            email: shelter.email,
            updatedAt: shelter.updateAt,
            createdAt: shelter.createdAt
        })
    }
}
