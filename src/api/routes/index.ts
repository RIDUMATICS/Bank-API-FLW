import express from 'express';
import accountRouter from './account';

const router = express.Router();
router.use('/accounts', accountRouter);

export default router;
