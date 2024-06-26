import { Shelter } from "../schemas/sjelter.schemas";

export default interface isShelterRepository{
    get(): Promise<Shelter>;
    update(data: Partial<Shelter>):Promise<void>
}