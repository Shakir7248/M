module.exports.config = {
  name: "breakup", 
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "See the match ratio between 2 people",
  commandCategory: "Game",
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Kisi Ko To Mantion kro yr 😀", event.threadID);
  var name = (await Users.getData(mention)).name
  var namee = (await Users.getData(event.senderID)).name
  var tle = Math.floor(Math.random() * 101);

  var arraytag = [];
      arraytag.push({id: mention, tag: name});
      arraytag.push({id: event.senderID, tag: namee});
  var mentions = Object.keys(event.mentions)

      let Avatar = (await axios.get( `https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
          fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
      let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
          fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );        


     var imglove = [];

            imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
            imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
      var msg = {body: `✨ Aapka Breakup Ho Gya ✨\n\n✨ Ab Tum Dono Ek Dusre Se Kabhi Bat Nhi Kroge 💔\n\n✨ Ek Dusre Ko Block Kro 😅\n\n✨ ${namee} 💔 ${name}\n\n✨ Ek Dusre Se Nafrat : ${tle}% 🤬\n\n✨ MADE BY : MISS.PRIYA`, mentions: arraytag, attachment: imglove}
      return api.sendMessage(msg, event.threadID, event.messageID)
    }