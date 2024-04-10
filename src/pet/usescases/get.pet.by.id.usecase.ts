import { Inject } from "@nestjs/common"
import PetTokens from "../pet.token"
import IPetRepository from "../interface/pet.repository.interface"
import GetPetByIdUseCaseInput from "./dtos/get.pet.by.id.usecase.Input"
import { IUseCase } from "src/shelter/domain/iusecase.interface"
import PetNotFoundError from "src/domain/errors/pet.not.found.error"
import GetpPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output"
import { Pet } from "../schema/pet.schema"

export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetpPetByIdUseCaseOutput>{

	constructor(
		@Inject(PetTokens.petRepository)
		private readonly petRepository: IPetRepository
	){}
	async run(input: GetPetByIdUseCaseInput): Promise<GetpPetByIdUseCaseOutput> {
		const pet = await this.getPetById(input.id)

		if(!pet){
			throw new PetNotFoundError()
		}

		return new GetpPetByIdUseCaseOutput({
			id: pet._id,
			name: pet.name,
			type: pet.type,
			size: pet.size,
			gender: pet.gender,
			bio: pet.bio,
			photo: null,
			createdAt: pet.createdAt,
			updatedAt: pet.updatedAt,
		})
	}

	private async getPetById(id: string): Promise<Pet>{
		try {
			return await this.petRepository.getById(id)
		}catch(error){
			return null
		}
	}
}