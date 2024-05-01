module.exports.config = {
	name: "evening",
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
	if (event.body.indexOf("Good Evening")==0 || event.body.indexOf("good evening")==0 || event.body.indexOf("Good evening")==0 || event.body.indexOf("Gud evening")==0 || event.body.indexOf("gud evening")==0 || event.body.indexOf("Gud eve")==0 || event.body.indexOf("good eve")==0 || event.body.indexOf("Good eve")==0 || event.body.indexOf("GOOD EVENING")==0 || event.body.indexOf("GOOD EVE")==0 ) { 
		var msg = {
				body: `SAME TOO YOU ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
