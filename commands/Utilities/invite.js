const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Invite the bot to your server.",
  botPerms: ["SEND_MESSAGES", "CREATE_INSTANT_INVITE", "EMBED_LINKS"],
    run: async (interaction, client) => {
      await interaction.deferReply({ ephemeral: false });

        const embed = new MessageEmbed()
            .setAuthor("Invite", interaction.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setColor("#000001")
            .setDescription(`\`\`\`\nThank for support! <3\`\`\``)
            .setFooter(`Requested By: ${interaction.user.tag}`, interaction.user.displayAvatarURL())

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
                    .setEmoji("🔗")
            )
            .addComponents(
                new MessageButton()
                    .setLabel("Support Server")
                    .setStyle("LINK")
                    .setURL("https://discord.gg/SNG3dh3MbR")
                    .setEmoji("🔗")
            )

        interaction.editReply({ embeds: [embed], components: [row] });
    }
}