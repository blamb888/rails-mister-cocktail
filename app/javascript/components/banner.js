import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Sailor Moon", "Sailor Mercury", "Sailor Venus"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
