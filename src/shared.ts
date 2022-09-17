import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export const tColors = resolveConfig(tailwindConfig).theme.colors;
