import { Injectable } from "@nestjs/common";
import CreatedPetUseCaseInput from "./dtos/create.pet.usecase.input";
import { IUseCase } from "src/shelter/domain/iusecase.interface";
import CreatedPetUseCaseOutput from "./dtos/create.pet.usecase.output";

@Injectable()
export default class CreatePetUseCase implements IUseCase<CreatedPetUseCaseInput, CreatedPetUseCaseOutput>{
    run (input: CreatedPetUseCaseInput):
    Promise<CreatedPetUseCaseOutput>{
        throw new Error ("Method not implemented.");
    }

}