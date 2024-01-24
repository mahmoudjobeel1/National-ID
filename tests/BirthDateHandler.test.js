import { BirthDateHandler } from '.././handlers/BirthDateHandler.js';
import Request from '.././Request.js';

test('should validate birth date', () => {
    const handler = new BirthDateHandler();
    const nationalID = '30006131301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.isValid).toBe(true);

});

