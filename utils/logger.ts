import pino from 'pino';
import pinoHttp from 'pino-http';

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      destination: 1, // 1 is stdout
      colorize: true
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
