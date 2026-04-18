import type { FC } from 'react';
import { useGetSequalsAndPriquelsQuery } from '@/entities/movie'; 
import { Card } from '@/entities/movie';

interface RelatedMoviesProps {
  id: string;
}

export const RelatedMovies: FC<RelatedMoviesProps> = ({ id }) => {
  const { data: relatedMovies, isLoading } = useGetSequalsAndPriquelsQuery(id);

  if (isLoading) return <div>Загрузка похожих фильмов...</div>;
  if (!relatedMovies || relatedMovies.length === 0) return null;

  return (
    <div className="movie__related">
      <h3 className="movie__related-title">Сиквелы и Приквелы</h3>
      <div className="movie__related-row">
        {relatedMovies.map((item: any) => (
          <Card 
            key={item.filmId}
            id={item.filmId}
            imgSrc={item.posterUrl}
            title={item.nameRu}
            titleEng={item.nameEn}
            year={item.year}
            genres={item.genres}
          />
        ))}
      </div>
    </div>
  );
};
