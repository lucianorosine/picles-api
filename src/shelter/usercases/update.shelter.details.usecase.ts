import { Injectable } from "@nestjs/common";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import { IUseCase } from "../domain/iusecase.interface";


@Injectable()
export default class UpdateShelterDetailsUseCase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>  
{
    run (input: UpdateShelterDetailsUseCaseInput):
    Promise<UpdateShelterDetailsUseCaseOutput> {
        throw new Error ("Method not implemented.");
    }

}