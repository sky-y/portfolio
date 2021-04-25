module.exports = {
  //-- SITE SETTINGS -----
  author: "@skyy_writing",
  siteTitle: "Yuki Fujiwara",
  siteShortTitle: "Yuki Fujiwara", // Used as logo text in header, footer, and splash screen
  siteDescription: "藤原由来（藤原惟）のポートフォリオです。",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "ja_JP",
  siteIcon: "content/favicon.ico", // Relative to gatsby-config file
  seoTitleSuffix: "Yuki Fujiwara", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    // primary: "Roboto, Arial, sans-serif",
    primary:
      "ヒラギノ明朝 Pro W3, Hiragino Mincho Pro, 游明朝, Yu Mincho, 游明朝体, YuMincho, ＭＳ Ｐ明朝, MS PMincho, serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  // mediumRssFeed:
  // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://note.com/sky_y/rss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "note",
      url: "https://note.com/sky_y",
    },
    {
      name: "はてなブログ",
      url: "https://p-zombie.hatenablog.com/",
    },
    {
      name: "Github",
      url: "https://github.com/sky-y/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/skyy_writing",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      // {
      //   name: "Articles",
      //   url: "/#articles",
      // },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Features",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
