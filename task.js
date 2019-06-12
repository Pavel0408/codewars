// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  const strArr = str.split(/[-_]/);
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(``);
}
