const express = require("express");
const app = express();
const func = require("./algorithms/filter_list.js");

const result = func.filter_list([1, "a", "b", 0, 15]);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
