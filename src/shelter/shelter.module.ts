import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterDetailsUseCase from './usercases/get.shelter.details.usecase';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { SehlterSchema, Shelter } from './schemas/sjelter.schemas';
import { ShelterRepository } from './shelter.repository';
import UpdateShelterDetailsUseCase from './usercases/update.shelter.details.usecase';

@Module({
  controllers: [ShelterController],

  imports:[
    MongooseModule.forFeature([{ name: Shelter.name, schema: SehlterSchema}]),
  ],



  providers: [
    {
      provide:ShelterTokens.getSheltonDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    },    
    {
      provide:ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterTokens.updateSheltonDetailsUseCase,
      useClass: UpdateShelterDetailsUseCase,
    }
  ]

})
export class ShelterModule {}
