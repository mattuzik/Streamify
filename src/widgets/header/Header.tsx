import { NavLink } from "react-router-dom"
import { useState } from "react"

import ModeButton from "../../features/mode-button"
import BurgerButton from "../../shared/ui/BurgerButton"
import CategoriesModal from "../../features/categories-modal"
import Search from "../../features/search"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpenStatus = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header container">
      {
        isOpen ? <CategoriesModal toggleOpenStatus={toggleOpenStatus} setIsOpen={setIsOpen}/> : null
      }
      <NavLink to="/" className="header__logo">Streamify</NavLink>


      <div className="header__seacrh">
        <Search />
      </div>

      <div className="header__column-actions">
        <ModeButton />
        <BurgerButton isOpen={isOpen} toggleOpenStatus={toggleOpenStatus}/>
      </div>
    </header>
  )
}
 
export default Header