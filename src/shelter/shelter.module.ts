import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterDetailsUseCase from './usercases/get.shelter.details.usecase';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { SehlterSchema, Shelter } from './schemas/sjelter.schemas';

@Module({
  controllers: [ShelterController],

  imports:[
    MongooseModule.forFeature([{ name: Shelter.name, schema: SehlterSchema}]),
  ],

  providers: [
    {
      provide:ShelterTokens.getSheltonDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
