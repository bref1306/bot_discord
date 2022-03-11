"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowButton = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
require("dotenv").config();
exports.ShowButton = {
    name: "button",
    description: "Vous renvoie un bouton",
    type: "CHAT_INPUT",
    options: [
        {
            name: "mot",
            description: "Met juste un mot random",
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const query = interaction.options.get('mot')?.value;
        const content = "Clique pour voir ?";
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('youtube')
            .setLabel('Go !')
            .setStyle('SECONDARY')
            .setEmoji('😄'));
        await interaction.followUp({ ephemeral: true, content, components: [row] });
        if (process.env.apiKey) {
            console.log('API connecté');
        }
        client.on("interactionCreate", async (interaction) => {
            if (interaction.isButton()) {
                const url = 'https://www.googleapis.com/youtube/v3/search?key=' + process.env.apiKey + '&type=video&part=snippet&q=' + query;
                const response = await (0, node_fetch_1.default)(url);
                const data = await response.json();
                const idVideo = JSON.stringify(data.items[0]['id']['videoId']);
                const title = JSON.stringify(data.items[0]['snippet']['title']);
                const description = JSON.stringify(data.items[0]['snippet']['description']);
                const channel = JSON.stringify(data.items[0]['snippet']['channelTitle']);
                const image = JSON.stringify(data.items[0]['snippet']['thumbnails']['medium']);
                console.log(data.items[0]);
                const embed = new discord_js_1.MessageEmbed()
                    .setColor('#8F3B3A')
                    .setTitle(title + ' de ' + channel)
                    .setURL("https://www.youtube.com/watch?v=" + idVideo)
                    .setDescription(description);
                await interaction.reply({ content: 'C\'est bon t\'es content tu veux une médaille ? Non je déconne tiens : ', embeds: [embed] });
            }
        });
    }
};
