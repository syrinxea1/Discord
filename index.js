const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1201106199383375942')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=nGKFgidwsTM&list=RDnGKFgidwsTM&start_radio=1') //Must be a youtube video link 
    .setState('Recording')
    .setName('maya')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1201127101311492118/1202948321409372191/8279972121a6540ae1a22713b2ad4615.png?ex=65cf4fed&is=65bcdaed&hm=d426a5c2132a3747ee169d85250322676b8a29e0ce0c27e5d4bd3dd5304c8a6f&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝑝𝑟𝑒𝑚 𝑎𝑐𝑐𝑠 , 𝑛𝑖𝑡𝑟𝑜𝑠 & 𝑔𝑎𝑚𝑒 𝑐𝑟𝑒𝑑𝑠') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1191505419764510801.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit dc shop!') //Text when you hover the Small image
    .addButton('shop', 'https://discord.com/invite/eporium')
    .addButton('vouches', 'https://discord.gg/bG6PgpBA2P');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `.gg/eporium`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
