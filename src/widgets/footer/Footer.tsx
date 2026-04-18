import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__column"><NavLink to="/" className="footer__logo-link">Streamify</NavLink></div>
      <div className="footer__column footer__column-text">
        <p className="footer__text">Проект учебный, могут быть ограничения</p>
        <p className="footer__text">Права принадлежат правообладателю</p>
        <p className="footer__text">Developer: <a href="https://github.com/mattuzik" target="_blank">mattuz!k</a></p>
      </div>
    </footer>
  )
}
 
export default Footer