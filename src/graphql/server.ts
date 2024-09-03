import { createSchema, createServer } from 'sveltekit-graphql';
import helloModule from './hello';

const schema = createSchema([helloModule]);
const server = createServer(schema);

export default server;
