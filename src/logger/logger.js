// import { createLogger, format, transports } from "winston";


// export default winston.createLogger({
//   level: "error",
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.simple(),
//     winston.format.timestamp({
//       format: "YYYY-MM-DD HH:mm:ss",
//     }),
//     winston.format.printf(
//       ({ timestamp, level, message }) => `${timestamp} [${level}] : ${message} `
//     )
//   ),
  transports: [new winston.transports.Console()],
});
