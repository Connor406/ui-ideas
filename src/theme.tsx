import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
})

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif`,
        transition: "0.4s ease-in-out",
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  components: {
    Text: {
      baseStyle: {
        fontSize: "10rem",
        textAlign: "center",
        width: "100%",
        margin: "0 auto",
        color: "#fff",
      },
    },
  },
})

export default theme
