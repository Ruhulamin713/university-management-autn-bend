import mongoose from 'mongoose';
import { app } from './app';
import config from './config';
import { logger, errorLogger } from './share/logger';
const PORT = process.env.PORT || 5000;
import { Server } from 'http';

// to handle uncaught rejection error
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;
async function main() {
  try {
    await mongoose.connect(`${config.database_url}`);
    server = app.listen(PORT, () => {
      logger.info(`Application listening on port ${config.port}}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect.', err);
  }
  //to shut down server gracefully
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
