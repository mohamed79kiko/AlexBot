/*


   
   # MADE BY boodyhsn!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/boodyhsn ]
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Stream a song from a given link or text from sources' },
          { name: '⏹️ Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: '📊 Queue', value: 'View and manage the song queue of this server' },
          { name: '⏭️ Skip', value: 'Skip the current playing song' },
          { name: '⏸️ Pause', value: 'Pause the currently playing song' },
          { name: '▶️ Resume', value: 'Resume the current paused song' },
          { name: '🔁 Loop', value: 'Toggle loop mode for queue and current song' },
          { name: '🔄 Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️ Previous', value: 'Play the previous song in the queue' },
          { name: '🔀 Shuffle', value: 'Shuffle the songs in queue' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1206753963588845631/1209294701652607047/kwwN70d.jpg?ex=65e66674&is=65d3f174&hm=9285d9bfe8488981da19d36642f0638d031157961f3ba6ac3fdaa541f858afd1&')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://youtube.com/@boodyhsn-?si=2nenFQKGbYHQ1QSV')
        .setStyle(ButtonStyle.Link);

      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/boodyhsn')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://discord.gg/boodyhsn')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};

/*


   
   # MADE BY boodyhsn!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/boodyhsn ]
*/