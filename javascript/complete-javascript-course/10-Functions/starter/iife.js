'use strict';

const runOnce = function () {
  console.log('this will never run again');
};

runOnce();

//IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

(() => console.log('this will never run again'))();

{
  var isPrivate = 23;
}

console.log(isPrivate);
