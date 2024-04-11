import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/shelter/domain/iusecase.interface";

import IPetRepository from "../interface/pet.repository.interface";
import PetTokens from "../pet.token";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { Pet } from "../schema/pet.schema";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import UpdatePetByIdUseCaseOutput from "./dtos/update.pet.by.id.usecase.output";

@Injectable()
export default class UpdatePetByIdUseCase
  implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>
{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository,
  ) {}

  async run(
    input: UpdatePetByIdUseCaseInput,
  ): Promise<UpdatePetByIdUseCaseOutput> {
    let pet = await this.getPetById(input.id);

    if (pet == null) {
      throw new PetNotFoundError();
    }

    await this.petRepository.updateById({
      ...input,
      _id: input.id,
    });

    pet = await this.getPetById(input.id);

    return new UpdatePetByIdUseCaseOutput({
      id: pet._id,
      name: pet.name,
      type: pet.type,
      size: pet.size,
      gender: pet.gender,
      bio: pet.bio,
      photo: pet.photo,
      createdAt: pet.createdAt,
      updatedAt: pet.updatedAt,
    });
  }

  private async getPetById(id: string): Promise<Pet> {
    try {
      return await this.petRepository.getById(id);
    } catch {
      return null;
    }
  }
}