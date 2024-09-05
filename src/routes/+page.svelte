<script>
	// src/routes/+page.svelte
	import { source } from 'sveltekit-sse';
	const value = source('/sse-source').select('message');
</script>

{$value}
