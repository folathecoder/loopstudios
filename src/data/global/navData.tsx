import type { NavDataTypes } from "types/navDataTypes";

const navData: NavDataTypes = {
  logo: {
    image: "",
    altText: "loopstudio",
    link: "/",
  },
  menu: [
    {
      title: "about",
      link: "/",
    },
    {
      title: "careers",
      link: "/",
    },
    {
      title: "events",
      link: "/",
    },
    {
      title: "products",
      link: "/",
    },
    {
      title: "support",
      link: "/",
    },
  ],
  social: [
    { title: "facebook", icon: "/", link: "https://facebook.com" },
    { title: "twitter", icon: "/", link: "https://twitter.com" },
    { title: "pinterest", icon: "/", link: "https://pinterest.com" },
    { title: "instagram", icon: "/", link: "https://instagram.com" },
  ],
  copyright: "© 2021 Loopstudios. All rights reserved.",
};

export default navData;
