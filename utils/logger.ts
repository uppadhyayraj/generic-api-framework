import pino from 'pino';
import pinoHttp from 'pino-http';

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      destination: 1, // 1 is stdout
      colorize: true,
      levelFirst: true,
      messageFormat: '{msg}',
      ignore: 'pid,hostname',
      customLevels: {
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10,
      },
      customColors: 'error:red,warn:yellow,info:green,debug:blue,trace:magenta', // Custom colors for log levels
    }
  }
});

const httpLogger = pinoHttp({
  logger,
  customLogLevel: (res, err) => {
    if (res.statusCode && res.statusCode >= 400 && res.statusCode < 500) return 'warn';
    if ((res.statusCode && res.statusCode >= 500) || err) return 'error';
    return 'info';
  }
});

export { logger, httpLogger };
