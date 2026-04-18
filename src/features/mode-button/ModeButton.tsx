import { useContext } from "react"
import { ThemeContext } from "@/app/providers/ThemeProvider"
import sunIcon from '@/shared/assets/modes/sun.svg'
import moonIcon from '@/shared/assets/modes/moon.svg'

const ModeButton = () => {
  const { onThemeButtonClick, theme } : any = useContext(ThemeContext)

  return (
    <button onClick={onThemeButtonClick} className="mode-button">
      <img src={theme === 'light' ? sunIcon : moonIcon} alt="" />
    </button>
  )
}
 
export default ModeButton