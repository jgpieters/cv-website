const { transports, format, createLogger } = require("winston");
const logDir = "logs";
const fs = require("fs");
const env = process.env.NODE_ENV || "development";

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const options = {
    errorfile: {
        level: "error",
        filename: `${logDir}/error.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    allfile: {
        level: "silly",
        filename: `${logDir}/app.log`,
        handleExceptions: true,
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
};

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.splat(),
        format.simple(),
        format.printf((info: any) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console({
            level: "silly",
            colorized: true
        }),
        ...(env !== "development" ? [new (require("winston-daily-rotate-file"))(options.errorfile),
        new (require("winston-daily-rotate-file"))(options.allfile)] : []),
    ]


});

export default logger;