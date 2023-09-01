export interface IResponse {
  status: 'success' | 'error';
  statusCode: number;
  data?: { [key: string]: any };
  message: string;
}

export enum AccountType {
  Savings = 'Savings',
  Checking = 'Checking',
  Current = 'Current',
}

export interface IAccount {
  accountNumber: string;
  accountHolderName: string;
  accountHolderDOB: string;
  accountType: AccountType;
  initialBalance: number;
}

export interface ICreateAccount extends Omit<IAccount, 'id'> {}
