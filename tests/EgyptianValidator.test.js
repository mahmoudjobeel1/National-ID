import EgyptianValidator from '../validators/EgyptianValidator.js';

test('should validate and extract information correctly', () => {
    const nationalID = '30006131301394';
    const validator = new EgyptianValidator(nationalID);

    const result = validator.validateAndExtractInfo();

    expect(result.isValid).toBe(true);
    expect(result.info.birth_date).toBe('2000-06-13');
    expect(result.info.birth_place).toBe('Ash Sharqia');
    expect(result.info.person_sex).toBe('Male');
});

test('should validate and extract information correctly', () => {
    const nationalID = '29001011234567';
    const validator = new EgyptianValidator(nationalID);

    const result = validator.validateAndExtractInfo();

    expect(result.isValid).toBe(true);
    expect(result.info.birth_date).toBe('1990-01-01');
    expect(result.info.birth_place).toBe('Dakahlia');
    expect(result.info.person_sex).toBe('Female');
});
