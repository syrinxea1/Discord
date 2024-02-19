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
    .setState('Playing')
    .setName('𝑝𝑟𝑒𝑚 𝑎𝑐𝑐𝑠 , 𝑛𝑖𝑡𝑟𝑜𝑠 & 𝑔𝑎𝑚𝑒 𝑐𝑟𝑒𝑑𝑠')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1201127101311492118/1202948321409372191/8279972121a6540ae1a22713b2ad4615.png?ex=65e1c4ed&is=65cf4fed&hm=bfe8fd7714ee1e539d0193714401a1a943f601404c9085c263652907ce332f73&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('eporium') //Text when you hover the Large image
    .setAssetsSmallImage('https://discord.com/channels/@me/1201127101311492118/1202948325037449327') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit shop') //Text when you hover the Small image
    .addButton('⇢˗ˏˋShop࿐ྂ', 'https://discord.com/invite/eporium')
    .addButton('⇢˗ˏVouches࿐ྂ', 'https://discord.gg/bG6PgpBA2P');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['MTE5OTUzNDE2OTEwMTk1OTE4MA.GHipzS.KpC8J177gLmpLPmn9WuPlD18l3IbcjRpl5otcE'];
client.login(mySecret);
