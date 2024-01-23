import Validator from './Validator.js';
import { SyntexHandler } from '../handlers/SyntexHandler.js';
import { BirthDateHandler } from '../handlers/BirthDateHandler.js';

export default class EgyptianValidator extends Validator {

    constructor(nationalID) {
        super(nationalID);
        this.initializeHandlers();
    }

    initializeHandlers() {
        const syntexHandler = new SyntexHandler();
        const birthDateHandler= new BirthDateHandler();

        syntexHandler.setNextHandler(birthDateHandler);

        this.firstHandler = syntexHandler;
    }

    validateAndExtractInfo() {
        this.firstHandler.handle(this.request);
        return this.request;
    }

}