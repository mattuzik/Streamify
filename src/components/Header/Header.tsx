import { NavLink } from "react-router-dom"
import { useState } from "react"

import ModeButton from "../ModeButton"
import BurgerButton from "../BurgerButton"
import CategoriesModal from "../CategoriesModal"
import Search from "../Search"

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