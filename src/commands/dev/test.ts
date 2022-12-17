import { client } from '../../index.js';

client.newCommand({
  name: 'test',
  permissions: ['SendMessages'],
  description: 'Test Command',
  isDmOnly: true,
  execute(message, _args, _command) {
    message.channel.send("get nae nae'd");
    console.log(client.commands);
  }
});
