import  Request  from "../Request.js";

export default class Validator {
    
    constructor(nationalID) {
        if (this.constructor === Validator)
            throw new Error("Cannot create instance of Validator abstract class");
        this.request = new Request(nationalID);
        this.firstHandler = null;
    }

    validateAndExtractInfo() { }
}

