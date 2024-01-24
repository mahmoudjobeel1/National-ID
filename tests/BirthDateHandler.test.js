import { BirthDateHandler } from '.././handlers/BirthDateHandler.js';

test('should validate birth date', () => {
    const handler = new BirthDateHandler();
    const request = {
        nationalID: '9301234567890', 
        info: {},
    };

    handler.handle(request);

    expect(request.info.isValid).toBe(false);
    
});

