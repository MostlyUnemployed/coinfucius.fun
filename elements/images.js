var html = require("choo/html");
var css = require("sheetify");
var gifs = require('../assets/gifs')

const coinfucius = () => {
    const coinfuciusStyles = css`
    :host {
        box-shadow: 0px 0px 3rem 1.2rem #fe663090;
        border-radius: 2rem;
        padding: 1rem;
        background: #fe663090;
      }
    `
    return image('../assets/coinfucius_02.gif', coinfuciusStyles)
}

const coin = () => {

    const coinStyles = css`
    :host { 
        filter: saturate(120%) brightness(1.3);
        width: 90px !important;
        box-shadow: none;
        background: none;
    }
    @media (min-aspect-ratio: 4/3) {
            :host {
                min-width: 3rem;
                max-width: 3rem;
            }
        }
    `
    return image(gifs.coin, coinStyles)

}

const image = (src, styles) => {

    const imgStyles = css `
    
    :host {
        width: 100%;
    }
    `

    return html `
        <div class='${styles}'>
            <img class='${imgStyles}' src='${src}'/>
        </div>
        `

}

module.exports = {
    image,
    coin,
    coinfucius
}