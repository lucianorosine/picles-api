import { Pet } from "../schema/pet.schema";

export default interface IPetRepository{
    crate(data: Partial<Pet>): Promise<Pet>
    getById(id:string): Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    deleteById(data: Partial<Pet>): Promise<void>
}