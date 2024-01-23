import Validator from './Validator.js';

export default class EgyptianValidator extends Validator {

    constructor(nationalID) {
        super(nationalID);
    }

    validateAndExtractInfo() {
        return this.request.nationalID; 
    }

}