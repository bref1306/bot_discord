"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const hello_1 = require("./commands/hello");
const random_number_1 = require("./commands/random_number");
exports.Commands = [
    hello_1.Hello,
    random_number_1.Random,
];
