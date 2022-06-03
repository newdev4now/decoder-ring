// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // Alphabet used for plain text input
  const alphaKey = 'abcdefghijklmnopqrstuvwxyz';

  // Function to get unique alphabet
  function unique(alphabet) {
    return new Set(alphabet).size === alphabet.length;
  }



  // Encode function
  function encoder(input, alphabet) {
    if (!alphabet || !unique(alphabet)) return false;

    if (alphabet.length !== 26) return false;

    let result = '';
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let index = input[i];
      if (index === ' ') {
        result += ' ';
      } else {
        let alphaIdx = alphaKey.indexOf(index);
        result += alphabet[alphaIdx];
      }
    }
    return result;
  }


  // Decode function
  function decoder(input, alphabet) {
    if (!alphabet || !unique(alphabet)) return false;

    if (alphabet.length !== 26) return false;

    let result = '';
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let newIndex = input[i];
     // console.log(`newIndex = ${newIndex}`);
      if (newIndex === ' ') {
        result += ' ';
      } else {
        let alphaIdx = alphabet.indexOf(newIndex);
    //    console.log(`alphaIdx = ${alphaIdx}`);
        result += alphaKey[alphaIdx];
      }

    }
    return result;
  }


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input, alphabet);
    } else {
      return decoder(input, alphabet);
    }
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
