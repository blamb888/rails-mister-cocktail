import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["a Matrix.", "a Godzilla.", "an Evangelian.", "a Godfather.", "a Kill Bill.", "a Die Hard.", "a Titanic."],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
