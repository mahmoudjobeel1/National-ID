import { BirthPlaceHandler } from '.././handlers/BirthPlaceHandler.js';
import Request from '.././Request.js';

test('Extract birthPlace with code=13, expected Ash Sharqia', () => {
    const handler = new BirthPlaceHandler();
    const nationalID = '30006131301394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.info.birth_place).toBe('Ash Sharqia');

});

test('Extract birthPlace with code=01, expected Cairo', () => {
    const handler = new BirthPlaceHandler();
    const nationalID = '30006130101394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.info.birth_place).toBe('Cairo');

});

test('test invalid code', () => {
    const handler = new BirthPlaceHandler();
    const nationalID = '30006130001394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.isValid).toBe(false);

});
