import { Controller } from '@nestjs/common';
import { Body, Get, Inject, Patch } from '@nestjs/common/decorators';
import GetShelterDetailsUseCaseOutput from './usercases/dtos/get.shelter.details.usecase.output';
import GetShelterDetailsUseCase from './usercases/get.shelter.details.usecase';
import { IUseCase } from './domain/iusecase.interface';
import ShelterTokens from './shelter.token';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';

@Controller('shelter')
export class ShelterController {

    @Inject(ShelterTokens.getSheltonDetailsUseCase)
    private readonly GetShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {        
            return await this.GetShelterDetailsUseCase.run(null)        
    }

    @Patch()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput) {
        console.log(input)
    }


}
