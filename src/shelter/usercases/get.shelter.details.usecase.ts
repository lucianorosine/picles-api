import { IUseCase } from "../domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    run(imput: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Luciano',
            shelterEmail: "@gmail.com",
            shelterPhone: "1231313",
            shelterWhatsApp: '2132133',
            createdAt: new Date(),
            updateAt: new Date()
        }))
    }
}