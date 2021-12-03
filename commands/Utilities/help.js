const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help command!",
  botPerms: ["SEND_MESSAGES", "CREATE_INSTANT_INVITE", "EMBED_LINKS"],
    run: async (interaction, client) => {
      await interaction.deferReply({ ephemeral: false });

          const embed = new MessageEmbed()
          .setAuthor("Help", client.user.displayAvatarURL())
          .setColor("#000001")
          .setDescription(`\`\`\`\nWarning: This bot already use slashcommand!\`\`\``)
          .setFooter(`Requested By: ${interaction.user.tag}`, interaction.user.displayAvatarURL())

          interaction.editReply({ embeds: [embed] });
    }
}