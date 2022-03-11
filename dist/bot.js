"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const ready_1 = tslib_1.__importDefault(require("./listeners/ready"));
const interactionCreate_1 = tslib_1.__importDefault(require("./listeners/interactionCreate"));
require("dotenv").config();
const path = require('path');
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('Bot activé');
});
const botToken = process.env.botToken;
const client = new discord_js_1.Client({
    intents: []
});
(0, ready_1.default)(client);
(0, interactionCreate_1.default)(client);
client.login(botToken);
