var html = require("choo/html");
var css = require("sheetify");
var image = require("../elements/images");
var gifs = require("../assets/gifs");



    const containerStyles = css`
    :host { 
        filter: saturate(120%) brightness(1.3);
        width: 90px !important;
        box-shadow: none;
        background: none;
    }

    `

    module.exports = html`${image(gifs.coin)}`

