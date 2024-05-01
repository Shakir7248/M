module.exports.config = {
  name: "jogia",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "owner dp",
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
"https://i.imgur.com/lVi9d9B.jpg","https://i.imgur.com/XMlNbGx.jpg","https://i.imgur.com/LFmfdcr.jpg","https://i.imgur.com/OcwrY7S.jpg","https://i.imgur.com/aZ90aXq.jpg","https://i.imgur.com/yLQkk92.jpg","https://i.imgur.com/RVLR6eV.jpg","https://i.imgur.com/rFKLJT1.jpg","https://i.imgur.com/wHBZQ02.jpg","https://i.imgur.com/xSpv2W8.jpg","https://i.imgur.com/OHcDUxf.jpg"
     ];
     var callback = () => api.sendMessage({body:`My Creator ❤️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };