import {IconButton} from "@chakra-ui/react"
import {useTheme} from "next-themes"
import {FiMoon, FiSun} from "react-icons/fi";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </IconButton>
  )
}