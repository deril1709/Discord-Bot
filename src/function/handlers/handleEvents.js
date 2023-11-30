const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('./src/events');
        for (const folder of eventFolders) {
            const eventFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter((file) => file.endsWith('.js'));

            switch (folder) {
                case 'client':
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        const { name, once, execute } = event;

                        if (once) {
                            client.once(name, (...args) => execute(...args, client));
                        } else {
                            client.on(name, (...args) => execute(...args, client));
                        }

                        console.log(`Event loaded: ${name}`);
                    }
                    break;

                // Add cases for other event folders if needed

                default:
                    break;
            }
        }
    };
};
