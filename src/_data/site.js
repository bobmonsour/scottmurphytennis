module.exports = {
  env: process.env.ELEVENTY_ENV,
  dev_url: "http://localhost:8080",
  prod_url: "https://www.scottmurphytennis.com",

  // Site settings
  title: "Marin Tennis Lessons | Scott Murphy Tennis Pro",
  headline: "Scott Murphy Tennis",
  description:
    "Scott Murphy is one of the most sought after USPTA tennis pros in California. He is a top ranked senior open player and former multi-sport athlete at Cal Berkeley.",
  url: "https://www.scottmurphytennis.net",
  baseurl: "",
  color_scheme: "auto",

  // Author settings
  author: {
    author__name: "Scott Murphy",
    author__bio:
      "Scott Murphy is one of the most sought after USPTA tennis pros in California. He is a top ranked senior open player and former multi-sport athlete at Cal Berkeley.",
    author__avatar: "images/scott-avatar.jpg",
    author__about: "about-scott-murphy-tennis-pro",
  },

  // Page hero settings
  hero: {
    hero__title:
      "I believe in my ability to help anyone improve their game at any stage in their development.",
    hero__image: "/images/scott-barn-court.jpg",
  },

  // Mailchimp settings
  mailchimp: "enable",
  mailchimp__identifier:
    "https://scottmurphytennis.us5.list-manage.com/subscribe/post?u=c15be8938f69aa462708fe3d9&amp;id=c781bf7d50",
  mailchimp__input__text: "Subscribe here",
  mailchimp__button__text: "Subscribe to updates",

  // Image gallery settings
  gallery: {
    gallery__title: "Scenes from around the pro tour",
    gallery__columns: 3,
    gallery__images: [
      {
        alt: "First image of the Paradise court",
        url: "/images/gallery-roger-federer.jpg",
      },
      {
        alt: "Second image of the Paradise court",
        url: "/images/gallery-emma-raducanu.jpg",
      },
      {
        alt: "Third image of the Paradise court",
        url: "/images/gallery-rafael-nadal.jpg",
      },
      {
        alt: "Fourth image of the Paradise court",
        url: "/images/gallery-garbine-muguruza.jpg",
      },
      {
        alt: "Fifth image of the Paradise court",
        url: "/images/gallery-carlos-alcaraz.jpg",
      },
      {
        alt: "Sixth image of the Paradise court",
        url: "/images/gallery-novak-djokovic.jpg",
      },
    ],
  },

  // Contact settings
  contact: {
    email: "scott@scottmurphytennis.net",
  },

  // Google Analytics settings
  googleAnalytics: "UA-6126863-1",
};
