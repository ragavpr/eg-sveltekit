import { sveltekit } from '@sveltejs/kit/vite';
import sveltekitGql from 'sveltekit-graphql/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekitGql(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
