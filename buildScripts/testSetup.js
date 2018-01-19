// This file isn't transpiled, so must us CommonJS and ES5

// Register babel to transpoile before out test run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function (){};
