
const { test, expect } = require('@playwright/test');
const { hello } = require('./hello.js');

console.log(hello());  // Should print: Hello
