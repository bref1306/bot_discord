"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ping = void 0;
exports.Ping = {
    name: "ping",
    description: "Vous répond bonjour",
    type: "CHAT_INPUT",
    run: async (client, interaction) => {
        const content = "Hello there!";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
