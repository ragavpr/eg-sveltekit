const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
let gid = 0;
export async function GET({ url }) {
    const id = ++gid;
    const stream = new ReadableStream({
        async start(controller) {
            // You can enqueue multiple data asynchronously here.
            while (true) {
                await delay(1000);
                const data = {
                    msg: `Message from instance: ${id}`,
                    now: Date.now()
                }
                //TODO: investigate: Despite cancelling, one more message is sent, then it stops
                console.log(`Sending message to instance ${id}`)
                controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
            }
            // controller.close();
        },
        cancel() {
            console.log(`Instance ${id} is cancelled`);
            // cancel your resources here
        }
    });

    return new Response(stream, {
        headers: {
            // Denotes the response as SSE
            'Content-Type': 'text/event-stream',
            // Optional. Request the GET request not to be cached.
            'Cache-Control': 'no-cache',
        }
    })
}