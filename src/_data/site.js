module.exports = {

  // Environment (defaults to 'development'); when set to 'production', google analytics is loaded
  env: "development",

  // Site settings
  title: "Marin Tennis Lessons | Scott Murphy Tennis Pro",
  headline: "Scott Murphy Tennis",
  description: "Scott Murphy is one of the most sought after USPTA tennis pros in California. He is a top ranked senior open player and former multi-sport athlete at Cal Berkeley.",
  url: "https://www.scottmurphytennis.net",
  baseurl: "",
  color_scheme: "auto",

  // Author settings
  author : {
    author__name: "Scott Murphy",
    author__bio: "Scott Murphy is one of the most sought after USPTA tennis pros in California. He is a top ranked senior open player and former multi-sport athlete at Cal Berkeley.",
    author__avatar: 'images/scott-avatar.jpg',
    author__about: 'about-scott-murphy-tennis-pro'
  },

  // Page hero settings
  hero: {
    hero__title: "I believe in my ability to help anyone improve their game at any stage in their development.",
    hero__image: '/images/scott-barn-court.jpg'
  },

  // Mailchimp settings
  mailchimp: "enable",
  mailchimp__identifier: "https://scottmurphytennis.us5.list-manage.com/subscribe/post?u=c15be8938f69aa462708fe3d9&amp;id=c781bf7d50",
  mailchimp__input__text: "Subscribe here",
  mailchimp__button__text: "Subscribe to updates",

  // Image gallery settings
  gallery: {
    gallery__title: "Scott's Paradise court in Ross, California",
    gallery__columns: 3,
    gallery__images: [
      { alt: 'First image of the Paradise court', url: '/images/paradise1.jpg' },
      { alt: 'Second image of the Paradise court', url: '/images/paradise2.jpg' },
      { alt: 'Third image of the Paradise court',  url: '/images/paradise3.jpg' },
      { alt: 'Fourth image of the Paradise court', url: '/images/paradise4.jpg' },
      { alt: 'Fifth image of the Paradise court', url: '/images/paradise5.jpg' },
      { alt: 'Sixth image of the Paradise court', url: '/images/paradise6.jpg' }
    ]
  },

  // Contact settings
  contact: {
    email: "scott@scottmurphytennis.net"
  },

  // Google Analytics settings
  googleAnalytics: "UA-6126863-1"

  };
