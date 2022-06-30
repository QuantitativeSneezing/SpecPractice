module.exports = function reverseString(string) {
  if (typeof string !== "string"){
    throw new TypeError;
  }
  // Your code here
  // let backwards=[];
  let backwards = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // backwards.push(string[i]);
    backwards = backwards + string[i];
  }
  // return backwards.join("");
  return backwards;
};
