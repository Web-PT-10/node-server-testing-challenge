const supertest = require('supertest');
const db = require('./data/config');

const server = require('./index');

beforeEach(async () => {
	await db.seed.run();
});

afterAll(async () => {
	await db.destroy();
});

test('welcome router', async () => {
	const res = await supertest(server).get('/');
	expect(res.statusCode).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.message).toBe('Welcome to our API');
});

test('create hobbit route', async () => {
	const res = await supertest(server).post('/hobbits').send({ name: 'gaffer' });
	expect(res.statusCode).toBe(201);
	expect(res.type).toBe('application/json');
	expect(res.body.name).toBe('gaffer');
});
