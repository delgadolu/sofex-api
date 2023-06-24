const getRandomString = (length = 4) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getRandomSimbols = (length = 4) => {
  let result = "";
  const characters = "^!$%&|[](){}:;.,*+-#@<>~€¬";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getRandomNumber = (digits = 4) => {
  return Math.random().toString().slice(-digits);
};

const generateRandomid = () => {
  const number = getRandomNumber();
  const simbols = getRandomSimbols();
  const letters = getRandomString();
  return letters.concat(number, simbols);
};

module.exports = {
  getRandomString,
  getRandomSimbols,
  getRandomNumber,
  generateRandomid,
};
