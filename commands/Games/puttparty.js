const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "puttparty",
  description: "play puttparty with friend!",
  botPerms: ["SEND_MESSAGES", "CREATE_INSTANT_INVITE", "EMBED_LINKS"],
    run: async (interaction, client) => {
      await interaction.deferReply({ ephemeral: false });

      if(!interaction.member.voice.channel) return interaction.editReply('You must be in a voice channel to use this command!'); {
        client.together.createTogetherCode(interaction.member.voice.channel.id, 'puttparty').then(async invite => {

          const embed = new MessageEmbed()
          .setAuthor("Puttparty", client.user.displayAvatarURL())
          .setColor("#000001")
          .setDescription(`\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
          .setFooter(`Requested By: ${interaction.user.tag}`, interaction.user.displayAvatarURL())

          const row = new MessageActionRow()
          .addComponents(
              new MessageButton()
              .setLabel('Click Here')
              .setURL(`${invite.code}`)
              .setStyle('LINK')
              .setEmoji('🔗')
          )

          interaction.editReply({ embeds: [embed], components: [row] });
        });
      };
    }
}