export * from './httpException';
export const generateAccountNumber = (): string => {
  const min = 1000000000; // Minimum 10-digit number (10^9)
  const max = 9999999999; // Maximum 10-digit number (10^10 - 1)

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber.toString();
};
