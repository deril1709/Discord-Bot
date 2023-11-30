require('dotenv'). config();
const {token} = process.env;
const {Client, Collection, GatewayIntentBits} = require('discord.js');
const fs = require('fs');


const client = client({ intents : GatewayIntentBits.Guilds   });
client.commands = new Collection;
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/function')
for (const folder of functionFolders){
    const functionFiles = fs
    .readdirSync(`./src/function${folder}`)
    .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles) require(`./function/${folder}/${file}`)(Client);
}