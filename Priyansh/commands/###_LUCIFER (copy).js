const fs = require("fs");
module.exports.config = {
  name: "Devil1",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Lucifer")==0 || event.body.indexOf("LUCIFER")==0 || event.body.indexOf("DEVIL")==0 || event.body.indexOf("Devil")==0) {
    var msg = {
        body: "I AM A DEVIL OF MY WORLD 👿",
        attachment: fs.createReadStream(__dirname + `/noprefix/DEVIL1.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👿", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }