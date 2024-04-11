import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import PetTokens from './pet.token';
import CreatePetUseCase from './usescases/create.pet.usecase';
import PetRepository from './pet.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './schema/pet.schema';
import GetPetByIdUseCase from './usescases/get.pet.by.id.usecase';
import UpdatePetByIdUSeCase from './usescases/update.by.id.usecase';

@Module({
  controllers: [PetController],
  imports:[MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema}])],
  providers: [
   {
    provide: PetTokens.createPetUseCase,
    useClass: CreatePetUseCase
   },
   {
    provide:PetTokens.petRepository,
    useClass: PetRepository
   },
   {
    provide:PetTokens.getPetByIdUseCase,
    useClass: GetPetByIdUseCase
   },
   {
    provide:PetTokens.updatePetByIdUseCase,
    useClass: UpdatePetByIdUSeCase
   }
  ]
})
export class PetModule {}
