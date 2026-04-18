import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h2 className="hero__title">Streamify: смотрите фильмы <span>бесплатно</span> в хорошем качестве.</h2>
        <p className="hero__desc">Здесь можно выбрать фильм, мультфильм, а также сериал на ваш вкус. У нас все новинки в хорошем качестве. Смотрите с удовольствием.</p>
        <NavLink to="/best">Перейти к просмотру →</NavLink>
      </div>
    </section>
  )
}
 
export default Hero