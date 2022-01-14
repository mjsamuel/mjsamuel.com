import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

export const tColors = resolveConfig(tailwindConfig).theme.colors

export const navLinks = [
  {
    name: "ABOUT",
    url: "/about",
  },
  {
    name: "WORK",
    url: "/work",
  },
  {
    name: "CONTACT",
    url: "/contact",
  },
];

