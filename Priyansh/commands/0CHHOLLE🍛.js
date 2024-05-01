const fs = require("fs");
module.exports.config = {
	name: "chhole",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chhole",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("CHHOLE BATURE")==0 || event.body.indexOf("Chhole bature")==0 || event.body.indexOf("chhole bature")==0 || event.body.indexOf("Chhole Bature")==0) {
		var msg = {
				body: "💝 YE LO BBY CHHOLE BATURE KHAO 🍛\n\n[Creator-Miss. Priya]",
				attachment: 
fs.createReadStream(__dirname + `/cache/chhole.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☑", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }