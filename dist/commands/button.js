"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowButton = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
require("dotenv").config();
exports.ShowButton = {
    name: "search",
    description: "Chercher une vidéo youtube aléatoirement",
    type: "CHAT_INPUT",
    options: [
        {
            name: "mot-clef",
            description: "Insère un mot clef pour avoir une vidéo random",
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
        client.on("interactionCreate", async (interaction) => {
            if (interaction.isButton()) {
                const url = 'https://www.googleapis.com/youtube/v3/search?key=' + process.env.apiKey + '&type=video&part=snippet&q=' + query;
                const response = await (0, node_fetch_1.default)(url);
                const data = await response.json();
                const idVideo = data.items[0]['id']['videoId'];
                const title = data.items[0]['snippet']['title'];
                const description = data.items[0]['snippet']['description'];
                const channel = data.items[0]['snippet']['channelTitle'];
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
