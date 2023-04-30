// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  var n = Math.sqrt(sq);
  return Number.isInteger(n) ? (n + 1) * (n + 1) : -1;
}
module.exports = {
  findNextSquare,
};
