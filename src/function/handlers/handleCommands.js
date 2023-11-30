const fs = require('fs')

module.exports = (client) => {
    client.commands = async()=>{
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders){
            const commandFoldersPath = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter(file => file.endsWith('.js'));

        const { commands,commandArray } = client;    
        for (const file of commandFiles){
            const command = require(`../../commands/${folder}/${file}`);
            client.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
            console.log(`Command : ${command.data.name}`)
        }
        }
    }
}