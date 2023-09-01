import { generateAccountNumber, BadRequestException } from '../../util';
import { IAccount } from '../../interfaces';
import database from '../model/database';
import { AccountIDSchema } from '../validation/accountSchema';

export default class RegisterService {
  static create(data: IAccount): IAccount {
    data.accountNumber = generateAccountNumber();
    return database.save(data);
  }

  static getAccountById(id: string): IAccount {
    const { error } = AccountIDSchema.validate(id);
    if (error) {
      throw new BadRequestException(error.message);
    }

    return database.findById(id);
  }

  static getAllAccounts(): IAccount[] {
    return database.find();
  }
}
