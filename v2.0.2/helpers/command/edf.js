const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event) => {
  
let edfList = [`
███████╗
██╔════╝
█████╗
██╔══╝
███████╗
╚══════╝
██████╗
██╔══██╗
██║　　██║
██║　　██║
██████╔╝
╚═════╝
███████╗
██╔════╝
█████╗
██╔══╝
██║
╚═╝
██╗
██║
██║
╚═╝
██╗
╚═╝`,
`┏━━━┳━━━┳━━━┓
┃┏━━┻┓┏┓┃┏━━┛
┃┗━━┓┃┃┃┃┗━━┓
┃┏━━┛┃┃┃┃┏━━┛
┃┗━━┳┛┗┛┃┃
┗━━━┻━━━┻┛`,
`ᴱᴰᶠ`,
`Ë́͠D͊͑͑F͑̚͠`,
`𝙴𝙳𝙵`,
`ᕮᗪԲ`,
`ᖵᗡƎ`,
`╱╱╱╱╱╭╮╭━╮
╱╱╱╱╱┃┃┃╭╯
╭━━┳━╯┣╯╰╮
┃┃━┫╭╮┣╮╭╯
┃┃━┫╰╯┃┃┃
╰━━┻━━╯╰╯`,
];

  
  let edfChoice = Math.floor(Math.random() * edfList.length);
  await SendMessage(edfList[edfChoice]);


  async function SendMessage(sentense) {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: event.channel_id,
      content: sentense,
    });
  }
}