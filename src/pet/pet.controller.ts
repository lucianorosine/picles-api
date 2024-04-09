import { Body, Controller, Inject, Post } from '@nestjs/common';
import CreatedPetControllerInput from './dtos/created.pet.controller.input';
import { IUseCase } from 'src/shelter/domain/iusecase.interface';
import { Promise } from 'mongoose';
import CreatedPetUseCaseOutput from './usescases/dtos/create.pet.usecase.output';
import CreatedPetUseCaseInput from './usescases/dtos/create.pet.usecase.input';
import PetTokens from './pet.token';

@Controller('pet')
export class PetController {

@Inject(PetTokens.createPetUseCase)
private readonly createPetUseCase: IUseCase<CreatedPetUseCaseInput, CreatedPetUseCaseOutput>

@Post()
async createPet(@Body() input: CreatedPetControllerInput):Promise<CreatedPetUseCaseOutput>{
    const useCaseInput = new CreatedPetUseCaseInput({...input});
    return await this.createPetUseCase.run(useCaseInput)
}
}

