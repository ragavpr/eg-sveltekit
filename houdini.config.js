import { createHoudiniConfig } from 'sveltekit-graphql/config';

const config = createHoudiniConfig({
	scalars: {
		// You can define custom scalars here
	}
});

export default config;
