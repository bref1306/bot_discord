"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowButton = void 0;
const discord_js_1 = require("discord.js");
exports.ShowButton = {
    name: "button",
    description: "Vous renvoie un bouton",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const content = "Cliquez pour aller vers Youtube";
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId('primary')
            .setLabel('Primary')
            .setStyle('PRIMARY').setURL(''));
        await interaction.followUp({ ephemeral: true, content, components: [row] });
    }
};
