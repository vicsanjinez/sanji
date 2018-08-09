module.exports = function sanji(string) {
  if (typeof string !== "string") throw new TypeError("sanji wants a string!");
  return string.replace(/\s/g, "");
};