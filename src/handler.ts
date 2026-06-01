export async function handler(request: Request): Promise<Response> {
	const url = new URL(request.url);

	if (url.pathname === '/api/status') {
		return Response.json({ version: '1' });
	}

	return new Response('Not found', { status: 404 });
}
