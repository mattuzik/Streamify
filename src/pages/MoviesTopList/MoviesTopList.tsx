import { useEffect, useState } from "react";
import { useGetFilmsTopQuery } from "../../app/services/filmsApi"
import { TOP_LISTS } from "../../variables";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

const MoviesTopList = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [page, setPage] = useState(1)

  const movieType = TOP_LISTS.find((item) => item.url === location.pathname)
  const { data, error, isLoading } = useGetFilmsTopQuery({ type: movieType?.value || 'TOP_POPULAR_MOVIES', page: page });
  const films = (data as { items: any[] })?.items;

  useEffect(() => {
    setPage(1);
  }, [movieType]);

  // TSX
  if (isLoading) {
    return (
      <main className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h4>Загрузка...</h4>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h4>Возникла ошибка при загрузке фильмов 😕</h4>
      </main>
    )
  }

  return (
    <main className="movies container">
      <div className="movies__heading">
        <h3 className="movies__title">{movieType?.title}</h3>
        <p className="movies__link" onClick={() => navigate(-1)}>← Назад</p>
      </div>
      <div className="movies__wrapper">
        {
          films?.map((item: any, index: number) => {
            return <Card 
              imgSrc={item.posterUrl}
              title={item.nameRu}
              titleEng={item.nameEn}
              year={item.year}
              genres={item.genres}
              countries={item.countries}
              id={item.kinopoiskId}
              key={item.kinopoiskId || index}
            />
          })  
        }
      </div>

      <Pagination 
        count={data?.totalPages ?? 1}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    </main>
  )
}
 
export default MoviesTopList