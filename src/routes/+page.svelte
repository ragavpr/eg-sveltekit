<script>
	import { browser } from "$app/environment";
    import init, { greet } from 'wasm-js-rust';
	import { onMount } from "svelte";

    $: greetings = ""
    onMount(async () => {
        await init(); // init initializes memory addresses needed by WASM and that will be used by JS/TS
        greetings = greet("User");
    })
</script>

<h1>State</h1>
<p>Greetings: {greetings}</p>
<p>Browser rendered: {browser}</p>