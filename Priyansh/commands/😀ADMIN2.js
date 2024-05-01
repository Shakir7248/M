module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Girl Dp photos",
  commandCategory: "Random-IMG",
  usages: "girl dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/Ca80Dra.jpg","https://i.imgur.com/GMBpQCG.jpg","https://i.imgur.com/aEMSy4t.jpg","https://i.imgur.com/MfSfxfq.jpg","https://i.imgur.com/iXlteLy.jpg","https://i.imgur.com/cfHdffL.jpg","https://i.imgur.com/YVczVn6.jpg","https://i.imgur.com/7gR1kHH.jpg"
     ];
     var callback = () => api.sendMessage({body:`🫅 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑 🫅`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };