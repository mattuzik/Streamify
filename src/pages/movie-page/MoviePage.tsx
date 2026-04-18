import { useNavigate, useParams } from "react-router-dom"
import { useGetSequalsAndPriquelsQuery, useGetFilmQuery } from "@/entities/movie/api/services"
import { RelatedMovies } from "@/widgets/related-movies/ui/RelatedMovies"
import { MovieDetails } from "@/entities/movie"
import VideoPlayer from "@/shared/ui/VideoPlayer"

const MoviePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: film, isLoading: isFilmLoading } = useGetFilmQuery(id as string, { skip: !id });
  const { isLoading: isRelatedLoading } = useGetSequalsAndPriquelsQuery(id as string, { skip: !id });

  if (isFilmLoading || isRelatedLoading) {
    return <main className="container">Загрузка...</main>
  }

  return (
    <main className="container">
      <div className="movie">
        <div className="movie__heading">
          <p className="movies__link" onClick={() => navigate(-1)}>← Назад</p>
        </div>

        <MovieDetails film={film}/>

        <div className="movie__player">
          <h3 className="movie__player-title">Смотреть онлайн</h3>
            <VideoPlayer />
        </div>

        <RelatedMovies id={id!} />
      </div>
    </main>
  )
}
 
export default MoviePage