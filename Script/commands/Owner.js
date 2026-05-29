const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MASTAN MARUF",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔═════════════════════ ✿
║ ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨
╠═════════════════════ ✿
║ 👑 𝗡𝗮𝗺𝗲 : 𝐌𝐀𝐑𝐔𝐅 𝐁𝐎𝐓𝐒
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐍𝐎 𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄 
║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝗛𝗦𝗖
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝗞𝗵𝗮𝗴𝗿𝗮𝗰𝗵𝗮𝗿𝗶
╠═════════════════════ ✿
║ 🔗 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦
╠═════════════════════ ✿
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :
║ 𝐍𝐀𝐈
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 :
║ 𝐓𝐎𝐑 𝐓𝐀 𝐃𝐄𝐊𝐇
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :
║ 𝐀𝐂𝐇𝐄 𝐊𝐈𝐍𝐓𝐔 𝐓𝐎𝐑𝐄 𝐃𝐈𝐁𝐎 𝐊𝐍
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 :
║ 𝐍𝐎𝐓 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 
╚═════════════════════ ✿
`;

  const images = [
    "https://i.imgur.com/5JXvUv0.jpeg",
    "https://i.imgur.com/5JXvUv0.jpeg",
    "https://i.imgur.com/5JXvUv0.jpeg",
    "https://i.imgur.com/5JXvUv0.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
