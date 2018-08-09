module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Sanji wants a string!");
  return string.replace(/\s/g, "");
};