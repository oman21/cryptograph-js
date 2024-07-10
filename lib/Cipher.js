"use strict"
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';

const Cipher = (key, text, decode) => {
  try{
    key = key.toString();
    let result = '';
    let shift_n = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const shift = parseInt(key[shift_n]);

      if (alphabet.includes(char.toLowerCase())) {
        let isUpperCase = char === char.toUpperCase();
        let currentIndex = alphabet.indexOf(char.toLowerCase());
        let newIndex = decode ? (currentIndex - shift + 26) % 26 : (currentIndex + shift) % 26;
        let newChar = alphabet[newIndex];

        result += isUpperCase ? newChar.toUpperCase() : newChar;
      } else if (digits.includes(char)) {
        let currentIndex = digits.indexOf(char);
        let newIndex = decode ? (currentIndex - shift + 10) % 10 : (currentIndex + shift) % 10;
        result += digits[newIndex];
      } else {
        result += char;
      }

      if(shift_n >= key.length - 1){
        shift_n = 0;
      }else{
        shift_n += 1;
      }
    }

    return result
  }catch(error) {
      return null
  }
}

module.exports = Cipher