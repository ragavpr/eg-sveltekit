import type { WithIndex } from '../$types';
import type { Resolvers } from './$types';

export const resolvers: WithIndex<Resolvers> = {
	Query: {
		hello() {
			return 'Hello SvelteKit!';
		}
	}
};
