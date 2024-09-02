<script lang=ts>
    import { writable } from "svelte/store";

    type SSE_Event = {
        msg: string;
        now: string;
    };

    const messages = writable<SSE_Event[]>([]);

    const sse_url = "https://sse.dev/test";
    const evtSource = new EventSource(sse_url);

    evtSource.onmessage = (event) => {
        // event.data is a string
        //data: {"testing":true,"sse_dev":"is great","msg":"It works!","now":1725297712676}\n\n
        const event_data: SSE_Event = JSON.parse(event.data);
        messages.update(prev => prev.concat(event_data));
    };
</script>

<h1>Server Side Events</h1>
<p>Source {sse_url}</p>

{#each $messages as message}
    <p>{message.msg} - {message.now}</p>    
{/each}