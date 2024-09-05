<script lang="ts">
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	type SSE_Event = {
		msg: string;
		now: number;
	};

	const messages = writable<SSE_Event[]>([
		{ msg: 'SSR Cache 1', now: 1725299770406 },
		{ msg: 'SSR Cache 2', now: 1725299770507 }
	]);

	const sse_url = `/sse-source`;

	if (browser) {
		messages.set([]);
		const evtSource = new EventSource(sse_url);
		evtSource.onmessage = (event) => {
			//data: {"msg":"Message from instance: 1","now":1725299770405}\n\n
			const event_data: SSE_Event = JSON.parse(event.data);
			messages.update((prev) => prev.concat(event_data));
		};
	}
</script>

<h1>Server Side Events</h1>
<p>Source {sse_url}</p>

{#each $messages as message}
	<p>{message.msg} - {message.now}</p>
{/each}
