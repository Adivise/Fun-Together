const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "wordsnack",
  category: "Games",
  aliases: ["ws"],
  cooldown: 3,
  description: "play wordsnack with friend!",

    run: async (client, message, args) => {
      const msg = await message.channel.send("Generating...");

      if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {

          const embed = new MessageEmbed()
          .setTitle("Words Snack")
          .setColor("#000001")
          .setDescription(`**[CLICK HERE!](${invite.code})**\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
          .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

          msg.edit({ content: " ", embeds: [embed] });
        });
      };
    }
}