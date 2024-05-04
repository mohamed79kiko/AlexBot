const db = require("../../mongoDB");
module.exports = async (client, queue, playlist) => {

queue?.textChannel?.send({ content: `<@${playlist.user.id}>, \`${playlist.name} (${playlist.songs.length + " " + '❌'})\` ❌❌` }).catch(e => { })
}

/*

   
   # MADE BY boodyhsn!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/boodyhsn ]
*/