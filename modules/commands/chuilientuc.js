module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Để tao dập lồn nó");
setTimeout(() => {a({body: "Địt lồn con thú ra đây coi" + " " + name, mentions: arraytag})}, 300);
setTimeout(() => {a({body: "Ra đây lẹ không anh đá vô lồn mày" + " " + name, mentions: arraytag})}, 500);
setTimeout(() => {a({body: "Gái mẹ mày ra đây anh hỏi chuyện" + " " + name, mentions: arraytag})}, 700);
setTimeout(() => {a({body: "Lẹ lên nào con thú 4 chân" + " " + name, mentions: arraytag})}, 900);
setTimeout(() => {a({body: "Địt mẹ mày để anh dập vô cái lồn con thú 4 chân nhà mày nhé" + " " + name, mentions: arraytag})}, 120);
setTimeout(() => {a({body: "Lên đây đi địt mẹ con ôn lồn" + " " + name, mentions: arraytag})}, 150);
setTimeout(() => {a({body: "Không ra bố phanh thây con súc vật nhà mày ra hàng ngàn mảnh" + " " + name, mentions: arraytag})}, 170);
setTimeout(() => {a({body: "Lẹ lên ra tap với tao nè địt con mẹ" + " " + name, mentions: arraytag})}, 200);
setTimeout(() => {a({body: "Tao dẫm lên đầu gái mẹ mày nè con thú?" + " " + name, mentions: arraytag})}, 230);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 250);
setTimeout(() => {a({body: "Đéo ra nữa tao địt con mẹ mày nát lồn" + " " + name, mentions: arraytag})}, 285);
setTimeout(() => {a({body: "Bố mày lên mic diss chết con đĩ mẹ mày giờ" + " " + name, mentions: arraytag})}, 310);
setTimeout(() => {a({body: "Ra đây on da mic với bố mày nào" + " " + name, mentions: arraytag})}, 360);
setTimeout(() => {a({body: "Thôi để tao xỉ vả dần dần vào mặt gái mẹ mày nè" + " " + name, mentions: arraytag})}, 390);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p để viết lyrics diss chết cụ mày đã" + " " + name, mentions: arraytag})}, 400);
setTimeout(() => {a({body: "Oce rồi con thú coi anh mày diss mày nè" + " " + name, mentions: arraytag})}, 650);
setTimeout(() => {a({body: "Lời đầu tiên tao muốn nói là đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 700);
setTimeout(() => {a({body: "Mặt con người sao mày lòng dạ lại là trâu mẹ cày" + " " + name, mentions: arraytag})}, 750);
setTimeout(() => {a({body: "Lồn bị địt nó mòn 1 bên còn 1 bên chó đụ" + " " + name, mentions: arraytag})}, 800);
setTimeout(() => {a({body: "Để tao diss cho mày biết thằng bot này nó khó dụ" + " " + name, mentions: arraytag})}, 850);
setTimeout(() => {a("Tao mệt rồi cho mày 4 câu như thế thôi")} , 900);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì chửi tiếp nhé" + " " + name, mentions: arraytag})}, 900);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình diss nha" + " " + name, mentions: arraytag})}, 1000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" + " " + name, mentions: arraytag})}, 1000);
setTimeout(() => {a({body: "Bố mày lên mic diss chết con đĩ mẹ mày giờ" + " " + name, mentions: arraytag})}, 310);
setTimeout(() => {a({body: "Ra đây on da mic với bố mày nào" + " " + name, mentions: arraytag})}, 360);
setTimeout(() => {a({body: "Thôi để tao xỉ vả dần dần vào mặt gái mẹ mày nè" + " " + name, mentions: arraytag})}, 390);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p để viết lyrics diss chết cụ mày đã" + " " + name, mentions: arraytag})}, 400);
setTimeout(() => {a({body: "Oce rồi con thú coi anh mày diss mày nè" + " " + name, mentions: arraytag})}, 650);
setTimeout(() => {a({body: "Lời đầu tiên tao muốn nói là đụ con đĩ mẹ mày" + " " + name, mentions: arraytag})}, 700);
setTimeout(() => {a({body: "Mặt con người sao mày lòng dạ lại là trâu mẹ cày" + " " + name, mentions: arraytag})}, 750);
setTimeout(() => {a({body: "Lồn bị địt nó mòn 1 bên còn 1 bên chó đụ" + " " + name, mentions: arraytag})}, 800);
setTimeout(() => {a({body: "Để tao diss cho mày biết thằng bot này nó khó dụ" + " " + name, mentions: arraytag})}, 850);
setTimeout(() => {a("Tao mệt rồi cho mày 4 câu như thế thôi")} , 900);
setTimeout(() => {a({body: "Nào ông chủ update lyric thì chửi tiếp nhé" + " " + name, mentions: arraytag})}, 900);
setTimeout(() => {a({body: "Cảm ơn bạn đã nghe mình diss nha" + " " + name, mentions: arraytag})}, 1000);
setTimeout(() => {a("Chào tạm biệt 🥺, lew lew")} , 1100);

  
  }