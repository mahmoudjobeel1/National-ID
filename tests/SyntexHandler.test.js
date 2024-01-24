import { SyntexHandler } from '.././handlers/SyntexHandler.js';
import Request from '.././Request.js';

test('check the id length with id length=13', () => {
    const handler = new SyntexHandler();
    const nationalID = '30006131301394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.isValid).toBe(true);

});

test('check the id accepts only digits (char = d)', () => {
    const handler = new SyntexHandler();
    const nationalID = '30d06131301394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.isValid).toBe(false);

});

test('check the id accepts only digits (space)', () => {
    const handler = new SyntexHandler();
    const nationalID = '3 506131301394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.isValid).toBe(false);

});
