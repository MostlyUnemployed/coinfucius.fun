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
    background: url("../assets/cookie_background.png");
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

  @media (min-aspect-ratio: 4/3) {
    .logos {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 3rem;
      justify-content: space-around;
      align-items: center;
    }
  }

  @media (max-aspect-ratio: 4/3) {
    .logos {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
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

.finished {
  position: fixed;
  height: 80%;
  z-index: 3;
  width: 80%;
  padding: 3rem;
  box-shadow: 0px 0px 3rem 1.2rem #fe663093;
  background: #fe663093;
}

`;

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE);

  return html `
    <body>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119810529-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119810529-5');
    </script>
      <main class=' ${mainStyles} flex flex-column items-center pa4' >

        <div class='finished flex flex-column justify-center items-center'>
          <h3>THE PROPHECY HAS BEEN FULFILLED</h3>
          <p>Congratulations <a href='https://twitter.com/5chdn'>Afri!!</a></p>
          <p>Coinfucius will return at DevCon5</p>
          <div class='logos'>
          <a href='https://flexdapps.com' target="_blank"><img src='../assets/flex.gif'/></a>
          <a href='https://status.im' target="_blank"><img src='../assets/status.gif'/></a>
        </div>
          <div class='flex items-center justify-around'>
          ${images.coinfucius()}
        </div>
        </div>

        
      </main>
    </body>
  `
}