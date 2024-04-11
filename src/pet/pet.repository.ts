import { Injectable } from "@nestjs/common"
import IPetRepository from "./interface/pet.repository.interface"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Pet } from "./schema/pet.schema"


@Injectable()
export default class PetRepository implements IPetRepository {
    
    constructor(
        @InjectModel(Pet.name)
        private readonly petModel: Model<Pet>,
      ) {}
    crate(data: Partial<Pet>): Promise<Pet> {
        throw new Error("Method not implemented.")
    }

    async updateById(data: Partial<Pet>): Promise<void> {
        await this.petModel.updateOne(
          {
            _id: data._id,
          },
          {
            ...data,
            updateAt: new Date(),
          },
        );
      }

    async getById(id: string): Promise<Pet> {
        return await this.petModel.findById(id)
    }

    async create(data: Partial<Pet>): Promise<Pet> {
        return await this.petModel.create({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }

    async deleteById(Id: string): Promise<void> {
        await this.petModel.deleteOne({ Id });
      }
    
    
}