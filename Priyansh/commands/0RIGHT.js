module.exports.config = {
	name: "right",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("Right")==0 || event.body.indexOf("👍")==0 || event.body.indexOf("Sabas")==0 || event.body.indexOf("SABAS")==0 || event.body.indexOf("Wow")==0 || event.body.indexOf("RIGHT")==0 || event.body.indexOf("Sabbas")==0 || event.body.indexOf("Super")==0 || event.body.indexOf("SABAS")==0 || event.body.indexOf("SABBAS")==0 ) { 
		var msg = {
				body: `THANK YOU SO MUCH ${name} 🫣❤️✨`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
