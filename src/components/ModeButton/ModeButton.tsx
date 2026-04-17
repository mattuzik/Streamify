import { useContext } from "react"
import { ThemeContext } from "../../app/App"
import sunIcon from '../../assets/modes/sun.svg';
import moonIcon from '../../assets/modes/moon.svg';
// import grayMoonIcon from '../../assets/modes/moon-gray.svg';

const ModeButton = () => {
  const { onThemeButtonClick, theme } : any = useContext(ThemeContext)

  return (
    <button onClick={onThemeButtonClick} className="mode-button">
      <img src={theme === 'light' ? sunIcon : moonIcon} alt="" />
    </button>
  )
}
 
export default ModeButton