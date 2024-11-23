<script lang="ts">
	import { onMount } from 'svelte';
	import { testServerCors } from '../lib/index';

	let serverResponse: string = '';

	onMount(async () => (serverResponse = await testServerCors()));
</script>

<h1>Welcome to SvelteKit</h1>
<p>{serverResponse}</p>
