import { describe, expect, it } from 'vitest';
import { handler } from '../src/handler';

describe('status endpoint', () => {
	it('returns version 2', async () => {
		const response = await handler(new Request('https://example.test/api/status'));
		const body = await response.json();

		expect(response.status).toBe(200);
		expect(body).toEqual({ version: '2' });
	});
});
