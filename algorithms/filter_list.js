// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  const newArray = l.filter((item) => typeof item === "number");
  return newArray;
}

module.exports = {
  filter_list,
};
