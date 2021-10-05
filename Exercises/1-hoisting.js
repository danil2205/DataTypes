/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-var */
'use strict';


const fn = () => {
  console.log({ a });
  var a = 228;
};

module.exports = { fn };
