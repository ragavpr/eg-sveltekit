const connections_array: Record<string, ReadableStreamDefaultController> = {};
let broadcastInterval: NodeJS.Timeout | undefined = undefined;
let gid = 0;

function broadcast() {
	const time = Date.now();
	console.log(`Broadcasting message to ${Object.keys(connections_array).length} instances`);
	Object.keys(connections_array).forEach((id) => {
		connections_array[id].enqueue(
			`data: ${JSON.stringify({
				msg: `Instance: #${id} - Connections: ${Object.keys(connections_array).length}`,
				now: time
			})}\n\n`
		);
	});
}

export async function GET() {
	const id = ++gid;
	const stream = new ReadableStream({
		async start(controller) {
			console.log(`Instance #${id} is connected`);
			connections_array[id] = controller;
			// there were no connections before
			if (Object.keys(connections_array).length == 1) {
				console.log(`Routine started`);
				broadcastInterval = setInterval(broadcast, 1000);
			}
		},
		cancel() {
			console.log(`Instance #${id} is cancelled`);
			delete connections_array[id];
			// there are no connections left
			if (Object.keys(connections_array).length == 0) {
				console.log(`Routine ended`);
				clearInterval(broadcastInterval!);
			}
		}
	});

	return new Response(stream, {
		headers: {
			// Denotes the response as SSE
			'Content-Type': 'text/event-stream',
			// Optional. Request the GET request not to be cached.
			'Cache-Control': 'no-cache'
		}
	});
}
