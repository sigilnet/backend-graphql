import '@server/env';

import {getLogger} from 'log4js';
import {ExtLogger} from './env';
import mongoose from 'mongoose';
import {schema} from './schema';
import {createServer} from '@graphql-yoga/node';
import {useDisableIntrospection} from '@envelop/disable-introspection';

const logger = getLogger('index') as ExtLogger;

const PORT = 4000;

const MONGODB_URL = process.env.MONGODB_URL || '';
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_DB = process.env.MONGODB_DB || '';

const GRAPHIQL_ENABLED = process.env.GRAPHIQL_ENABLED == 'true';

const plugins = [];

if (!GRAPHIQL_ENABLED) {
  plugins.push(useDisableIntrospection());
}

const server = createServer({
  schema,
  port: PORT,
  graphiql: GRAPHIQL_ENABLED,
  plugins,
  logging: logger,
  maskedErrors: !GRAPHIQL_ENABLED,
});

const main = async () => {
  await mongoose.connect(MONGODB_URL, {
    user: MONGODB_USER,
    pass: MONGODB_PASS,
    dbName: MONGODB_DB,
  });

  await server.start();
};

main();
