import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["the Matrix.", "a Shawshank Redemption.", "an Ingorious Bastard.", "a Howl's Moving Castle.", "a Kill Bill.", "a Die Hard.", "a Titanic."],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
