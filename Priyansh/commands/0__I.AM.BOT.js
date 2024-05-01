const fs = require("fs");
module.exports.config = {
	name: "bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("#Bot")==0 || event.body.indexOf("#bot")==0 || event.body.indexOf("#Bot h")==0 || event.body.indexOf("#bot h")==0) {
		var msg = {
				body: "      ✦𝐈 𝐀𝐌 𝐁𝐎𝐓✦\n\n𝐌𝐘 𝐏𝐑𝐎𝐅𝐈𝐗:  [#]\n\n𝐌𝐘 𝐍𝐀𝐌𝐄 𝐈𝐒: [𝐒𝐀𝐊𝐔]\n\n✨𝐌𝐘 𝐖𝐎𝐑𝐊:𝐓𝐔𝐌𝐇𝐀𝐑𝐀 𝐈𝐍𝐓𝐄𝐑𝐓𝐄𝐑𝐌𝐄𝐍𝐓 𝐊𝐑𝐍𝐀 😀🤭\n\n✨𝐌𝐘 𝐇𝐎𝐁𝐁𝐘:𝐓𝐔𝐌𝐇𝐀𝐑𝐈 𝐌𝐔𝐒𝐊𝐔𝐑𝐀𝐇𝐀𝐓🤭😅\n\n✨𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐒𝐎 𝐌𝐔𝐂𝐇 𝐀𝐋𝐋 𝐌𝐀𝐌𝐁𝐄𝐑𝐒 🙈🤭",
				attachment: 
fs.createReadStream(__dirname + `/cache/priya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }