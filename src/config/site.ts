import profilePic from "/Od1nStr3am.png";

export const siteConfig = {
  title: "Od1nStr3am's Website",

  panel: {
    url: "https://twitch.tv/od1nstr3am_",
  },

  profile: {
    avatar: profilePic,
  },

  partners: [
    { name: "Instant Gaming", url: "https://instant-gaming.com", logo: "/InstantGaming.png", color: "#FF5733" },
    { name: "BytePlayers", url: "https://byteplayers.net", logo: "/BytePlayers.png", color: "#33C1FF" },
    { name: "Gamers Gear", url: "https://gamersgear.de", logo: "/GamersGear.png", color: "#75FF33" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
