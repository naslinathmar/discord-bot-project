const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('kick member'),
	async execute(interaction) {
		await interaction.reply(`user with name ${interaction.user.username} was kicked by ${interaction.user.username}`);
	},
};