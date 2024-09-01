<script lang=js>
    import { browser } from "$app/environment";
    // still need to allow serve path in vite.config.js
    import init, { greet } from "$lib/wasm-js-rust";
    // alias required to be added in svelte.config.js to use $module
    // import init, { greet } from "$modules/wasm-js-rust/pkg";
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