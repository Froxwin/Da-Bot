![Typing SVG](https://readme-typing-svg.demolab.com/?color=74c7ec&duration=1&pause=10000&font=Allerta+Stencil&size=30&lines=SOFTandWET)

---

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Froxwin/Da-Bot/discord.js?color=%23f5e0dc&style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Froxwin/Da-Bot/dev/typescript?color=f2cdcd&style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Froxwin/Da-Bot?color=%23f5c2e7&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Froxwin/Da-Bot/build.yml?branch=main&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/Froxwin/Da-bot?color=%23cba6f7&style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Froxwin/Da-Bot?color=%23f9e2af&style=for-the-badge)

SOFTandWET is a powerful multipurpose bot built using [discord.js](https://discord.js.org/#/)

## Token

```env
# .env
TOKEN=your token
```

```ts
// index.ts
export const client = new SoftAndWet({
  clientOptions: {
  ...
  token: process.env.TOKEN!
});

```

## Running

```pwsh
# Installing dependiencies
npm install

# Compilling files
npm run build

# Invoking node
npm run start
```

## Adding commands

New commands can be added by making a new file for said command under `/src/commands/"appropriate group"`.

New groups can also be added in a similar manner, the bot will automatically read the group without having to code it in.

A general tempelate for commands is given here

```ts
// Import the bot client
import { client } from '../../index.js';

// Instantiate a new command
client.newCommand({
  // Name of the command (mandatory)
  name: 'test',
  // Permissions required to run command (optional)
  permissions: ['SendMessages'],
  // Description (optional)
  description: 'Test Command',
  // Other names the command can be run from (optional)
  alias: ['example_command'],
  // Can the command only be run in a DM channel (optional)
  isDmOnly: false,
  // Funcation executed when command is run (mandatory)
  execute(message, _args, _command) {
    message.channel.send('text');
  }
});
```

## Adding event listeners

New events can be added by making a new file under `/src/engine/events/`.

A general tempelate for events is given here

```ts
import { client } from '../../index.js';

client.newEvent({
  name: 'valid discord event',
  once: false,
  exec(...) {
    ...
  }
});
```

## Directory | file Structure

```js
src // Contains all code
├───commands // Contains all commamnd groups
│   ├───dev
│   │   ├───command.ts
│   │   └─── ...
│   ├───misc
│   ├───util
│   └─── ...
└───engine // Contains vital code
│   └───events // Events on which an action is triggered
│   │   ├───event.ts
│   │   └─── ...
│   ├───SOFTandWET.ts // Has the main bot class
│   ├───util.ts // utility functions acsessed anywhere
│   └─── ...
└───index.ts // Puts everything together
```

---

Authored and maintained by ©[Froxwin](https://github.com/Froxwin).
