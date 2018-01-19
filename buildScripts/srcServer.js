/* es5 which node does not support. bable transpiles from es6 (code) to es5 (for node)
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();
*/

import express from 'express';
import path from 'path';
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(require('web-ack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
