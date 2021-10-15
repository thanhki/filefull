module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[11];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 300);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 400);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 600);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 650);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 700);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 750);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 850);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 950);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 100);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 300);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 400);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 600);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 650);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 700);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 750);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 850);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 950);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 100);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 300);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 400);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 600);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 650);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 700);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 750);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 850);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 950);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 100);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 300);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 400);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 600);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 650);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 700);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 750);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 850);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 950);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 100);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 300);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 400);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 500);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 600);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 650);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 700);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 750);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 800);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 850);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 900);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 950);
setTimeout(() => {a({body: "ra đây chơi em" + " " + name, mentions: arraytag})} , 100);
}