import dotenv from 'dotenv';
import {configure, levels, Logger} from 'log4js';
import util from 'util';

dotenv.config();

const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';

levels.addLevels({EVENT_LOG: {value: 20001, colour: 'green'}});

export interface ExtLogger extends Logger {
  eventLog(message: any, ...args: any[]): void;
}

configure({
  appenders: {
    out: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%d{yyyy-MM-dd hh:mm:ss,SSS} - %z - %c - %p - %x{multiline}',
        tokens: {
          multiline: (loggingEvent: any) => {
            return util.format(...loggingEvent.data).replace(/\n/g, '\n ');
          },
        },
      },
    },
  },
  categories: {
    default: {
      appenders: ['out'],
      level: LOG_LEVEL,
      enableCallStack: true,
    },
  },
});
