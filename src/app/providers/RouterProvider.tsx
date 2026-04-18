import { Routes, Route } from 'react-router-dom';
import { TOP_LISTS } from '@/shared/config/variables';
import Main from '@/pages/main';
import MoviePage from '@/pages/movie-page';
import MoviesTopList from '@/pages/movies-page';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    {TOP_LISTS.map((item) => (
      <Route key={item.url} path={item.url} element={<MoviesTopList />} />
    ))}
    <Route path="*" element={<Main />} />
  </Routes>
);
