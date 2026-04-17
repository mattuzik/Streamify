import { Link } from "react-router-dom"

const Card = (props: any) => {
  const {
    imgSrc,
    title,
    titleEng,
    year,
    genres,
    countries,
    id
  } = props

  return (
    <Link className="card" to={`/movie/${id}`}>
      <img src={imgSrc} alt="" className="card__image"/>
      <p className="card__title">{title ? title : titleEng}</p>
      <p className="card__info">
        {year}
        {genres ? genres.slice(0, 1).map((item: any, index: number) => (
          <span key={index}>, {item.genre}</span>
        )) : null}
      </p>
    </Link>  
  )
}
 
export default Card