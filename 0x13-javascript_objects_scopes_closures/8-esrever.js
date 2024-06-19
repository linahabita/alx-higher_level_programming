#!/usr/bin/node
/* function that returns the reversed version of a list */
exports.esrever = function (list) {
  const arr = [];
  let i = list.length - 1;
  for (i; i >= 0; i--) {
    arr.push(list[i]);
  }
  return arr;
};
