const request = require('supertest');
const app = require('./app');
jest.setTimeout(10000);

describe('GET /joke', () => {
  test('It should respond with a random joke and punchline', async () => {
    const response = await request(app).get('/joke');
    expect(response.body).toHaveProperty('setup');
    expect(response.body).toHaveProperty('punchline');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /joke1', () => {
  test('It should respond with joke1 setup', async () => {
    const response = await request(app).get('/joke1');
    expect(response.body).toEqual({ setup: 'Joke 1 Setup' });
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /punchline1', () => {
  test('It should respond with joke1 setup and punchline', async () => {
    const response = await request(app).get('/punchline1');
    expect(response.body).toEqual({ setup: 'Joke 1 Setup', punchline: 'Joke 1 Punchline' });
    expect(response.statusCode).toBe(200);
  });
});

