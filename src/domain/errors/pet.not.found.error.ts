import { CustomError } from "./custon.error";


export default class PetNotFoundError extends CustomError{
    constructor() {
        super('Pet Not Found', '0001');
    }
}