import { BadRequestException, Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CreatedPetControllerInput from './dtos/created.pet.controller.input';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import { Promise } from 'mongoose';
import CreatedPetUseCaseOutput from './usescases/dtos/create.pet.usecase.output';
import CreatedPetUseCaseInput from './usescases/dtos/create.pet.usecase.Input';
import PetTokens from './pet.token';
import GetpetByIdUseCaseOutput from './usescases/dtos/get.pet.by.id.usecase.output';
import GetPetByIdUseCaseInput from './usescases/dtos/get.pet.by.id.usecase.Input';

@Controller('pet')
export class PetController {

@Inject(PetTokens.createPetUseCase)
private readonly createPetUseCase: IUseCase<CreatedPetUseCaseInput, CreatedPetUseCaseOutput>

@Inject(PetTokens.getPetByIdUseCase)
private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetpetByIdUseCaseOutput>

@Post()
async createPet(@Body() input: CreatedPetControllerInput):Promise<CreatedPetUseCaseOutput>{
    const useCaseInput = new CreatedPetUseCaseInput({...input});
    return await this.createPetUseCase.run(useCaseInput)
}

@Get(':id')
async getPetById(@Param('id') id: string): Promise<GetpetByIdUseCaseOutput> {
    try {
        const useCaseInput = new GetPetByIdUseCaseInput ({ id })
        return await this.getPetByIdUseCase.run(useCaseInput)
    }
    catch (error){
        throw new BadRequestException(JSON.parse(error.message))
    }
}


}

