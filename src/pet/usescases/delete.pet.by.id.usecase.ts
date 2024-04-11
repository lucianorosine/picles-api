import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.token";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.usecase.input";
import DeletePetByIdUseCaseOutput from "./dtos/delete.pet.by.id.usecase.output";
import { IUseCase } from "src/shelter/domain/iusecase.interface";
import PetRepository from "../pet.repository";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";

@Injectable()
export default class DeletePetByIdUseCase
  implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: PetRepository,
  ) {}

  async run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {
    const pet = await this.getPetById(input.id)

    if (pet == null) {
      throw new PetNotFoundError()
    }

    await this.petRepository.deleteById(input.id);

    return new DeletePetByIdUseCaseOutput();
  }

  private async getPetById(id: string): Promise<Pet> {
    try {
      return await this.petRepository.getById(id);
    } catch {
      return null;
    }
  }
}