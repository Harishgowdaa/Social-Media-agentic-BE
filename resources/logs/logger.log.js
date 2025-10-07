import { createRequire } from 'module';
import fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

const require = createRequire(import.meta.url);
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, prettyPrint } = format;

require('winston-daily-rotate-file');

if (!fs.existsSync('resources/logs/responselogs')) {
    fs.mkdirSync('resources/logs/responselogs');
}
const transportsLogger = [];

transportsLogger.push(
    new transports.DailyRotateFile({
        level: process.env.NODE_ENV === 'local' ? 'debug' : 'info',
        datePattern: 'DD-MM-YYYY',
        filename: `resources/logs/responselogs/${process.env.NODE_ENV}-%DATE%.log`,
        handleExceptions: true,
        json: true,
        maxSize: '500M',
        maxFiles: '3d',
    })
);

const logger = createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: transportsLogger,
    exitOnError: false,
});

logger.stream = {
    write(message, _encoding) {
        logger.info(message);
    },
};

export default logger;
