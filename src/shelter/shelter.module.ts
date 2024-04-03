import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterDetailsUseCase from './usercases/get.shelter.details.usecase';

@Module({
  controllers: [ShelterController],
  providers: [
    {
      provide:ShelterTokens.getSheltonDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
