export const generatePassword = (
  length = 8,
  options = { lower: true, upper: true, number: true, symbol: true },
) => {
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/';

  let availableChars = '';

  if (options.lower) availableChars += lowerChars;
  if (options.upper) availableChars += upperChars;
  if (options.number) availableChars += numberChars;
  if (options.symbol) availableChars += symbolChars;

  if (!availableChars) {
    throw new Error('At least one character type must be selected.');
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
};
