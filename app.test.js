const request = require('supertest');
const app = require('./app');

describe('Joke Endpoints', () => {
  it('should return a joke setup for joke1', async () => {
    const response = await request(app).get('/joke1');
    expect(response.statusCode).toBe(200);
    expect(response.body.setup).toBeTruthy();
    expect(response.body.punchline).toBeTruthy();
  });

  it('should return a joke setup for joke2', async () => {
    const response = await request(app).get('/joke2');
    expect(response.statusCode).toBe(200);
    expect(response.body.setup).toBeTruthy();
    expect(response.body.punchline).toBeTruthy();
  });
});

describe('Punchline Endpoints', () => {
  it('should return both setup and punchline for punchline1', async () => {
    const response = await request(app).get('/punchline1');
    expect(response.statusCode).toBe(200);
    expect(response.body.setup).toBeTruthy();
    expect(response.body.punchline).toBeTruthy();
  });

  it('should return both setup and punchline for punchline2', async () => {
    const response = await request(app).get('/punchline2');
    expect(response.statusCode).toBe(200);
    expect(response.body.setup).toBeTruthy();
    expect(response.body.punchline).toBeTruthy();
  });
});