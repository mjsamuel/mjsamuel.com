import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

export const tColors = resolveConfig(tailwindConfig).theme.colors

export const navLinks = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Work",
    url: "/work",
  },
  {
    name: "Contact",
    url: "/contact",
  }
];

