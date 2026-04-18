const MovieDetails = ({film} : any) => {
  return (
  <div className="movie__content">
    <img src={film.posterUrl ? film.posterUrl : ''} alt="" className="movie__image"/>

    <div className="movie__content-info">
      <h3 className="movie__content-title">{film.nameRu ? film.nameRu : film.nameEn || 'Without name'} ({film.year})</h3>
      <div className="movie__content-genres">
        {film.genres.map((item: any, index: number) => (
          <span key={index} className="movie__content-genre">{item.genre}</span>
        ))}
      </div>
      <p>{film.description}</p>
    </div>

    <div className="movie__column">
      <div className="movie__rating">
        <h6 className="">IMDb рейтинг</h6>
        <p><span className="movie__rating-value">{film.ratingKinopoisk ? film.ratingKinopoisk : '0'}</span>/10</p>
      </div>
    </div>
  </div>
  )
}
 
export default MovieDetails