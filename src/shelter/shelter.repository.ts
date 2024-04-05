import { Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Shelter } from "./schemas/sjelter.schemas";
import isShelterRepository from "./interfaces/shelter.repository.interface";

export class ShelterRepository implements isShelterRepository{
    constructor(
        @InjectModel(Shelter.name)
        private readonly shelterModel: Model<Shelter>
    ){}

        async get():Promise<Shelter>{
            return await this.shelterModel.findOne()
        }

}