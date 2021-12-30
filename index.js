/**
  * Hello Jon.
  *
  * I saw the issue with the deep nested array and I came up with this.
  * Let me know what you think. The only caveat I can see is that if there
  * are any characters with square brackets, they will be affected.
  *
  * Cheers!
  **/

'use strict';

module.exports = (arr) => {
  /* if not an array, then do not proceed */
  if (!Array.isArray(arr)) {
    throw new Error("- requires 'arr' argument to be of array type.");
  }
  /* ok. next */
  else {
    /* stringify the entire entry */
    let stringifiedArray = JSON.stringify(arr);

    /* remove all square brackets */
    let stringWithoutSquareBrackets = stringifiedArray.split("[").join("").split("]").join("");

    /* now return the value like this */
    return JSON.parse(`[${stringWithoutSquareBrackets}]`);
  }
};
