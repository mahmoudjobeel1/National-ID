import EgyptianValidator from './EgyptianValidator.js';

export default class ValidatorFactory {

    static createValidator(nationalID, country_code) {
        switch (country_code.toLowerCase()) {
            case 'eg':
                return new EgyptianValidator(nationalID);
            default:
                return null;
        }
    }
}