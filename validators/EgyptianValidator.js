import Validator from './Validator.js';
import { SyntexHandler } from '../handlers/SyntexHandler.js';
import { BirthDateHandler } from '../handlers/BirthDateHandler.js';
import { BirthPlaceHandler } from '../handlers/BirthPlaceHandler.js';
import { PersonSexHandler } from '../handlers/PersonSexHandler.js';

export default class EgyptianValidator extends Validator {

    constructor(nationalID) {
        super(nationalID);
        this.initializeHandlers();
    }

    initializeHandlers() {
        const syntexHandler = new SyntexHandler();
        const birthDateHandler= new BirthDateHandler();
        const birthPlaceHandler = new BirthPlaceHandler();
        const personSexHandler = new PersonSexHandler();

        syntexHandler.setNextHandler(birthDateHandler);
        birthDateHandler.setNextHandler(birthPlaceHandler);
        birthPlaceHandler.setNextHandler(personSexHandler);

        this.firstHandler = syntexHandler;
    }

    validateAndExtractInfo() {
        this.firstHandler.handle(this.request);
        return this.request;
    }

}