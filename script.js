// Write a Function to convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
  str = str.trim().split(" ");
  str = str.map( (curElem, index) => {
    if (index === 0) {
      return curElem.toLowerCase();
    } else {
      return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
    }
  })
  return str.join("");
}

console.log(toCamelCase("hello world shoHel"));
console.log(toCamelCase("this is shoHel"));

