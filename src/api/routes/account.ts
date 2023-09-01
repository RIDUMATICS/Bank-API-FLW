import express from 'express';
import { AccountController } from '../controllers';
import { validator } from '../../middlewares';

const router = express.Router();

router.post('/', validator('createAccount'), (_req, res) => {
  const response = AccountController.create(_req.body);
  return res.status(response.statusCode).json(response);
});

router.get('/:id', (_req, res) => {
  const response = AccountController.getAccountById(_req.params.id);
  return res.status(response.statusCode).json(response);
});

router.get('/', (_req, res) => {
  const response = AccountController.getAllAccounts();
  return res.status(response.statusCode).json(response);
});

export default router;
