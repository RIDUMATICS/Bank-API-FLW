import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { notFound, errorHandler } from './middlewares';
import apiRouter from './api/routes';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to FLW Bank API 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    data: {
      documentation:
        'https://documenter.getpostman.com/view/6765162/2s9Y5ctLEn',
      github: 'https://github.com/RIDUMATICS/Bank-API-FLW',
    },
  });
});

app.use('/api/v1', apiRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
