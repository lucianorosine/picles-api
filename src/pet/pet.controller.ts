import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import CreatedPetControllerInput from './dtos/created.pet.controller.input';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import { Promise } from 'mongoose';

import PetTokens from './pet.token';

import UpdatePetControllerInput from './dtos/update.pet.controller.input';

import DeletePetByIdUseCaseOutput from './usescases/dtos/delete.pet.by.id.usecase.output';
import DeletePetByIdUseCaseInput from './usescases/dtos/delete.pet.by.id.usecase.input';
import CreatedPetUseCaseInput from './usescases/dtos/create.pet.usecase.input';
import CreatedPetUseCaseOutput from './usescases/dtos/create.pet.usecase.output';
import UpdatePetByIdUseCaseInput from './usescases/dtos/update.pet.by.id.usecase.input';
import UpdatePetByIdUseCaseOutput from './usescases/dtos/update.pet.by.id.usecase.output';
import GetPetByIdUseCaseInput from './usescases/dtos/get.pet.by.id.usecase.input';

@Controller('pet')
export class PetController {

@Inject(PetTokens.createPetUseCase)
private readonly createPetUseCase: IUseCase<CreatedPetUseCaseInput, CreatedPetUseCaseOutput>

@Inject(PetTokens.createPetUseCase)
private readonly updateByIdPetUseCase: IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>

@Inject(PetTokens.deletePetByIdUseCase)
private readonly deleteByIdPetUseCase: IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>

@Inject(PetTokens.getPetByIdUseCase)
private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, DeletePetByIdUseCaseOutput>

@Post()
async createPet(@Body() input: CreatedPetControllerInput):Promise<CreatedPetUseCaseOutput>{
    const useCaseInput = new CreatedPetUseCaseInput({...input});
    return await this.createPetUseCase.run(useCaseInput)
}

@Get(':id')
async getPetById(@Param('id') id: string): Promise<DeletePetByIdUseCaseOutput> {
    try {
        const useCaseInput = new GetPetByIdUseCaseInput ({ id })
        return await this.getPetByIdUseCase.run(useCaseInput)
    }
    catch (error){
        throw new BadRequestException(JSON.parse(error.message))
    }
}

@Put(':id')
async updatePet(@Body() input: UpdatePetControllerInput, @Param('id') id: string){
    try {
        const useCaseInput = new UpdatePetByIdUseCaseInput({
          ...input,
          id
        });
        return await this.updateByIdPetUseCase.run(useCaseInput);
      } catch (e) {
        throw new BadRequestException(JSON.parse(e.message));
      }
   
}

@Delete(':id')
async deletePetById(
  @Param('id') id: string,
): Promise<DeletePetByIdUseCaseOutput> {
  try {
    const useCaseInput = new DeletePetByIdUseCaseInput({ id });
    return await this.getPetByIdUseCase.run(useCaseInput);
  } catch (error) {
    throw new BadRequestException(JSON.parse(error.message));
  }
}


}

