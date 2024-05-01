const fs = require("fs");
module.exports.config = {
	name: "owner",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "owner",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("OWNER")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("owner")==0 || event.body.indexOf("#owner")==0) {
		var msg = {
				body: "🫅 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑 🫅",
				attachment: 
fs.createReadStream(__dirname + `/cache/priya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }