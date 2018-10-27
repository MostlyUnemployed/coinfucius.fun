var html = require("choo/html");
var css = require("sheetify");
var images = require("../elements/images")

var TITLE = "coinfucius.fun";
var gifs = require("../assets/gifs");

module.exports = view;

const mainStyles = css `
  @font-face {
    font-family: main;
    src: url("../assets/Unbalanced.ttf");
  }

  body {
    background: url("../assets/cookie2.png");
    background-size: 30rem;
    background-position-x: 100px;
    display: flex;
    justify-content: center;
  }

  html {
    font-size: 18px;
    font-family: main;
    font-smooth: never;
    -webkit-font-smoothing: none;
    color: #ffcc00;
    letter-spacing: 4px;
    text-shadow: 1px 1px 1px #000000;
  }

  h3,
  p {
    font-size: 2rem;
    box-shadow: 0px 0px 3rem 1.2rem #fe663080;
    border-radius: 2rem;
    padding: 1rem;
    background: #fe663080;
    margin: 0;
  }

  p {
    font-size: 1.3rem !important;
    line-height: 2rem;
  }

  hr {
    border: none;
    width: 100%;
    z-index: 2;
    border-top: 2px solid #ffcc00;
    box-shadow: 1px 1px 1px #00000050;
  }

  :host {
    max-width: 700px;
  }

  :host div img {
    image-rendering: pixelated;
    width: 200px;
  }

  a:link,
  a:visited,
  a:active {
    color: #ffcc00;
  }
`;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);
console.log(images)
  return html `
    <body>
      <main class=' ${mainStyles} flex flex-column items-center pa4' >

        <div class='flex items-center justify-around'>
          ${images.coin()}
          ${images.coinfucius()}
          ${images.coin()}
        </div>

        <h3>Coinfucius is here to bring good fortune to the attendees of DevCon4</h3>
        <hr/>
        <p>Seek out the friends of Coinfucius to receive his mystic cookies!</p>
        <div class='flex items-center justify-around' style='width: 100%;'>
          <a href='https://flexdapps.com' target="_blank"><img src='../assets/flex.gif'/></a>
          <a href='https://status.im' target="_blank"><img src='../assets/status.gif'/></a>
        </div>
        <p><u>Each cookie contains a web3 fortune</u>, connect with the community and unite all 32 secret codes and fulfil the prophecy.</p>
        <p>Use #coinfucius on Twitter, mention @flexdapps or @ethstatus to find allies and share your quest.</p>
        <a href='https://get.status.im/chat/public/coinfucius-fun' target='_blank' style='margin-top: 1rem;'><h3>Fulfil the Prophecy</h3></a>
      </main>
    </body>
  `;
}