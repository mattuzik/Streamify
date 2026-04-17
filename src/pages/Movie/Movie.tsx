import { useNavigate, useParams } from "react-router-dom"
import { useGetSequalsAndPriquelsQuery, useGetFilmQuery } from "../../app/services/filmsApi"
import Card from "../../components/Card"
import VideoPlayer from "../../components/VideoPlayer"

const Movie = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: film, isLoading: isFilmLoading } = useGetFilmQuery(id, { skip: !id });
  const { data: relatedMovies, isLoading: isRelatedLoading } = useGetSequalsAndPriquelsQuery(id, { skip: !id });
  // const { isLoading: isStaffLoading } = useGetStaffQuery(id, { skip: !id });

  if (isFilmLoading || isRelatedLoading) {
    return <main className="container">Загрузка...</main>
  }

  return (
    <main className="container">
      <div className="movie">
        <div className="movie__heading">
          <p className="movies__link" onClick={() => navigate(-1)}>← Назад</p>
        </div>

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

        <div className="movie__player">
          <h3 className="movie__player-title">Смотреть онлайн</h3>
            <VideoPlayer />
        </div>

        <div className="movie__related">
          {
            relatedMovies ?
            <>            
              <h3 className="movie__related-title">Сиквелы && Приквелы</h3>

              <div className="movie__related-row">
                {
                  relatedMovies.map((item:any, index: number) => {
                    return <Card 
                      imgSrc={item.posterUrl}
                      title={item.nameRu}
                      titleEng={item.nameEn}
                      year={item.year}
                      genres={item.genres}
                      id={item.filmId}
                      key={item.kinopoiskId || index}
                    /> 
                  })
                }
              </div>
            </>
            : null
          }
        </div>
      </div>
    </main>
  )
}
 
export default Movie
