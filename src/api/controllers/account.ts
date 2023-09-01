import { BadRequestException, NotFoundException } from '../../util/httpException';
import { IAccount, IResponse } from '../../interfaces';
import RegisterService from '../services/account';

export class AccountController {
  static create(requestBody: IAccount): IResponse {
    const resp = RegisterService.create(requestBody);

    return {
      status: 'success',
      message: 'account created successfully',
      statusCode: 201,
      data: resp,
    };
  }

  static getAccountById(accountId: string): IResponse {
    const account = RegisterService.getAccountById(accountId);

    if (!account) {
      throw new NotFoundException('Account not found');
    }

    return {
      status: 'success',
      message: 'account fetched successfully',
      statusCode: 200,
      data: account,
    };
  }

  static getAllAccounts(): IResponse {
    const resp = RegisterService.getAllAccounts();

    return {
      status: 'success',
      message: 'accounts fetched successfully',
      statusCode: 200,
      data: resp,
    };
  }
}
