import { IAccount } from '../../interfaces';

const data: IAccount[] = [];
const DBIndex: { [key: string]: number } = {};

function save(account: IAccount) {
  data.push(account);
  DBIndex[account.accountNumber] = data.length - 1;
  return account;
}

function findById(accountId: string) {
  return data[DBIndex[accountId]];
}

function find() {
  return data;
}

export default {
  save,
  findById,
  find,
};
