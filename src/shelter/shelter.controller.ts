import { Controller } from '@nestjs/common';
import { Body, Get, Inject, Patch, Put } from '@nestjs/common/decorators';
import GetShelterDetailsUseCaseOutput from './usercases/dtos/get.shelter.details.usecase.output';
import GetShelterDetailsUseCase from './usercases/get.shelter.details.usecase';
import { IUseCase } from './domain/iusecase.interface';
import ShelterTokens from './shelter.token';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseOutput from './usercases/dtos/update.shelter.details.usecase.output';
import UpdateShelterDetailsUseCaseInput from './usercases/dtos/update.shelter.details.usecase.input';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getSheltonDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.updateSheltonDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IUseCase<UpdateShelterControllerInput, UpdateShelterDetailsUseCaseOutput>


    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {        
            return await this.getShelterDetailsUseCase.run(null)        
    }

    @Put()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {        
        const useCaseInput = new UpdateShelterDetailsUseCaseInput({...input});
        return await this.updateShelterDetailsUseCase.run(useCaseInput);

    }


}
