import EgyptianValidator from './EgyptianValidator.js';

export default class ValidatorFactory {

    static createValidator(nationalID) {
        switch (nationalID.length) {
            case 14:
                return new EgyptianValidator(nationalID);
            default:
                return null;
        }
    }
}