import { BirthDateHandler } from '.././handlers/BirthDateHandler.js';
import Request from '.././Request.js';

test('A month with days more than in real month like 06 - 31, expected false', () => {
    const handler = new BirthDateHandler();
    const nationalID = '30006311301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.isValid).toBe(false);

});

test('test Extracting the birth date, expected= 2000-06-13', () => {
    const handler = new BirthDateHandler();
    const nationalID = '30006131301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.info.birth_date).toBe('2000-06-13');

});

test('future date like 2024-02-01', () => {
    const handler = new BirthDateHandler();
    const nationalID = '32402011301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.isValid).toBe(false);

});

test("A year with 0 months like 2020-00-01",() => {
    const handler = new BirthDateHandler();
    const nationalID = '32000011301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.isValid).toBe(false);
})

test("old date before 1970 like 1900-01-01",() => {
    const handler = new BirthDateHandler();
    const nationalID = '20001011301394'
    const request = new Request(nationalID);

    handler.handle(request);

    expect(request.info.birth_date).toBe("1900-01-01");
})

