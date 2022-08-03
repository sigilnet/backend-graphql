import '@server/env';

import {getLogger} from 'log4js';
import {ExtLogger} from './env';

const logger = getLogger('index') as ExtLogger;

const main = async () => {
  logger.info('Started');
};

main();
