const status = "AUTOMATIC";
const botName = " AlexBot ";
const rtxText = "boodyhsn";
const version = "Latest@ v14"; 
const startTime = Date.now();

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\x1b[1m\x1b[36m╔════════════════════════════════════════════╗');
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log(`\x1b[1m\x1b[36m            ${botName}     `);
  console.log(`\x1b[1m\x1b[36m             Authorization : ${status}    `);
  console.log(`\x1b[1m\x1b[36m             Version: ${version}`);
  console.log(`\x1b[1m\x1b[36m             Hosting me: ${uptimeInSeconds}s`);
  console.log(`\x1b[1m\x1b[36m             Powered by ${rtxText}`);
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log('\x1b[1m\x1b[36m╚════════════════════════════════════════════╝\x1b[0m');
}

module.exports = {
  printWatermark,
};


/*
   
   # MADE BY boodyhsn!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/boodyhsn ]
*/
