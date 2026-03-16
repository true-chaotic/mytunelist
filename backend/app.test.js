import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app';

describe('GET /', function () {
	it('responds with json', async function () {
		const response = await request(app).get('/');

		expect(response.headers['content-type']).toMatch(/json/);
		expect(response.status).toEqual(200);
		expect(response.body).toEqual({ result: 'Hello World!' });
	});
});
