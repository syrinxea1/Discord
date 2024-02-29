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
    .setApplicationId('1200448965259300874')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=oIYWenB637c&list=RDnGKFgidwsTM&index=7') //Must be a youtube video link 
    .setState('Playing')
    .setName('discounted nitro, prems & game creds')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1201099754583633971/1212550126531514420/7d9dd0378bf3a742bf6779c992663809.jpg?ex=65f23e4e&is=65dfc94e&hm=3c22017094ab00dc99318bc262a335971ccdb81e6db6f1ae1bbdb61ba22f9fff&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('airis') //Text when you hover the Large image
    .setAssetsSmallImage('https://discord.com/channels/@me/1201127101311492118/1202948325037449327') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit shop') //Text when you hover the Small image
    .addButton( 'Shop', ' https://discord.gg/RpEWErbuKZ')
    

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `airis`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
