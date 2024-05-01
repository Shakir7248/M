module.exports.config = {
	name: "morning",
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
	if (event.body.indexOf("Good Morning")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("GM")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("gm")==0 || event.body.indexOf("Gud morning")==0 || event.body.indexOf("gud morning")==0 || event.body.indexOf("GUD MORNING")==0 || event.body.indexOf("GOOD morning")==0 ) { 
		var msg = {
				body: `«࿙❰༗ོ⍣𓆩${name}𓆪ོ༗❱࿚»\n━━━━❖❖💠❖❖━━━━
𑁍𝆊𝐕𝐞𝐫𝐲 𝆊𝐆𝐨𝐨𝐝 𝆊𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝆊𝐃𝐞𝐚𝐫𑁍
━━━━❖❖💠❖❖━━━━`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
