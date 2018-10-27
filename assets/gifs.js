var html = require("choo/html");
var css = require("sheetify");

module.exports = {
    cookie: 'https://web.archive.org/web/20091027025736/http://www.geocities.com/crayzeebogey/pix/fortunecookie.gif',
    coin: 'https://web.archive.org/web/20090830110414im_/http://geocities.com/SoHo/Cafe/7500/coin-2.gif',
    confucius: 'https://web.archive.org/web/20090804105231/http://hk.geocities.com/taichipals/GoFortune.gif',
}



var coin = html `
<img class='${imgStyles + ' coin'}' src='https://web.archive.org/web/20090830110414im_/http://geocities.com/SoHo/Cafe/7500/coin-2.gif'/>
`