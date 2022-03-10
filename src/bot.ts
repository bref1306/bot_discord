import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";


const token = "OTUxMzk1MjY2NDcxMjc2NTc0.Yim14w.sYaRvRuxU-rNYcOYNOceUVJWoHk";
const botToken = process.env.botToken;
console.log("Bot is starting...");

const client = new Client({
    intents: []
});
ready(client);
interactionCreate(client);
client.login(token);

// console.log(client);