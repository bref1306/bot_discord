"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
exports.Random = {
    name: "random",
    description: "Retourne un nombre aléatoire entre un minimum et maximum",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'minimum',
            description: 'Insérer un nombre minimum',
            type: 'NUMBER',
            required: true,
        },
        {
            name: 'maximum',
            description: 'Insérer un nombre maximum',
            type: 'NUMBER',
            required: true,
        },
    ],
    run: async (client, interaction) => {
        let min = await interaction.options.get('minimum')?.value;
        let max = await interaction.options.get('maximum')?.value;
        let random_number = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        const content = "Le nombre est " + random_number;
        await interaction.followUp({
            ephemeral: true,
            content,
        });
    }
};
