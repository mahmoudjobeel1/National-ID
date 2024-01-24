import { PersonSexHandler } from '.././handlers/PersonSexHandler.js';
import Request from '.././Request.js';

test('test (9, 13( odd id, expected Male', () => {
    const handler = new PersonSexHandler();
    const nationalID = '30006131301394'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.info.person_sex).toBe('Male');

});

test('test (9, 13( even id, expected Female', () => {
    const handler = new PersonSexHandler();
    const nationalID = '30006131301384'
    const request = new Request(nationalID);

    handler.handle(request);
    expect(request.info.person_sex).toBe('Female');

});