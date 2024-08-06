import { Theme } from "./themeMode.types"

type TypeThemeState = {
  themeState: Theme | '';
}

const getPreferenceThemeMode = () => {
  const colorMode = useColorMode();
  return colorMode.preference;
}


export const useThemeModeProvider = defineStore('themeProvider', {
  state: () => <TypeThemeState>(
      {themeState: getPreferenceThemeMode()}
  ),
  getters: {
    getCurrentThemeMode: (state) => state.themeState
  },
  actions: {
    switchThemeMode() {
      const colorMode = useColorMode();
      const switchColorMode = (theme:Theme):void => {
        this.themeState = theme;
        colorMode.preference = theme;
      }
      this.themeState == Theme.Dark ? switchColorMode(Theme.Light) : switchColorMode(Theme.Dark)
    },
  }
})