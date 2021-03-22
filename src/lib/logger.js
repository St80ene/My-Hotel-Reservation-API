import winston from "winston";

/**
 *  currently winston is not configured to store logs to file,
 *  it only replaces console.log() in this project
 */

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "error",
      format: winston.format.json(),
    }),
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

export default logger;
