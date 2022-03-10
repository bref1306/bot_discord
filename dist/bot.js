"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
const botToken = process.env.botToken;
console.log(botToken);
const client = new discord_js_1.Client({
    intents: []
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
