import express, { Application, urlencoded } from 'express';
export const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/', routes);

//global error handler
app.use(globalErrorHandler);
// handle api  not found
app.use('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
