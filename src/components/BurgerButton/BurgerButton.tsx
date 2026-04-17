const BurgerButton = (props: any) => {
  const {
    isOpen,
    toggleOpenStatus
  } = props

  return (
    <button className={`header__burger-button burger-button ${isOpen ? 'is-active' : ''}`} onClick={toggleOpenStatus}>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
      <span className="burger-button__line"></span>
    </button>
  )
}
 
export default BurgerButton