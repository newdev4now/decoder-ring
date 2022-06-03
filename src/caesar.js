// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function encoder(input, shift) {
    let newInput = input.toLowerCase();
    const legend = 'abcdefghijklmnopqrstuvwxyz';
    let message = '';
    for (let i = 0; i < newInput.length; i++) {
      let letter = newInput[i];
      if (!legend.includes(letter)) {
        message += letter;
      } else {
        let letterNum = legend.indexOf(letter);
        let newIndex = letterNum + shift;
        if (newIndex >= 26) {
          newIndex = newIndex - 26;
        } else if (newIndex < 0) {
          newIndex = newIndex + 26;
        }
        message += legend[newIndex];
      }
    }
    return message;
  }

  function decoder (input, shift) {
    let newInput = input.toLowerCase();
    const legend = 'abcdefghijklmnopqrstuvwxyz';
    let message = '';
    for (let i = 0; i < input.length; i++) {
      const letter = newInput[i];
      if (!legend.includes(letter)) {
        message += letter
      } else {
        let letterNum = legend.indexOf(letter);
        let newIndex = letterNum - shift;
        if (newIndex >= 26) {
          newIndex = newIndex - 26;
        } else if (newIndex < 0) {
          newIndex = newIndex + 26;
        }
        message += legend[newIndex];
      }
    }
    return message;
  }


  function caesar(input, shift, encode = true) {

    if (!shift || shift > 25 || shift < -25) return false;
    if (encode) {
      return encoder(input, shift);
    } else {
      return decoder(input, shift);
    }
  }

  return {
    caesar
  }
})();

module.exports = { caesar: caesarModule.caesar };
