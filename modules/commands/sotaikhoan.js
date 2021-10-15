module.exports.config = {
    name: "số tài khoản",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mainzed",
    description: "số tài khoản admin",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "stk.gif")) request("https://tinyurl.com/yz79demv").pipe(fs.createWriteStream(dirMaterial + "stk.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `✨Bot mình cho thuê 0đ nhưng ai có lòng tốt thì có thể donate nhé✨\n✨Bán follow, like tương tác✨\n dạy newbie(tạo bot)✨\n✨Bán file bot✨\n✨thesieure: 0912846131(Nguyễn Bảo Toàn)✨\nMomo: 0912846131✨\n✨mọi chi tiết liên hệ facebook.com/toanhotface✨ `,
                attachment: fs.createReadStream(__dirname + `/noprefix/stk.gif`)
            }
    if (event.body.toLowerCase() == "Donate"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Số tài khoản"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "STK"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Stk"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "stk"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
  }