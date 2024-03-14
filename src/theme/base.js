import { mainTheme } from "./schemes/mainTheme";

const themeMap = {
  main: mainTheme,
}

export const themeCreator = (theme) => themeMap[theme];