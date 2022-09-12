import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export const tColors = resolveConfig(tailwindConfig).theme.colors;

export const externalLinks = {
  resume: "/resume.pdf",
  github: "https://github.com/mjsamuel",
  instagram: "https://www.instagram.com/matt.samuel/",
  linkedin: "https://au.linkedin.com/in/matt-samuel",
};
