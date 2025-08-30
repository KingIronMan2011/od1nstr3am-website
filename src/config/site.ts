import profilePic from "../Od1nStr3am_PP.png";

export const siteConfig = {
  title: "Od1nStr3am's Website",

  panel: {
    url: "https://twitch.tv/od1nstr3am_",
  },

  profile: {
    avatar: profilePic,
  },

} as const;

export type SiteConfig = typeof siteConfig;
