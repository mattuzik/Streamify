import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchQuery } from '../../app/slices/searchQuerySlice';
import { useGetFilmsBySearchQuery } from '../../app/services/filmsApi';

export default function Search() {
  const [input, setInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keyword } = useSelector(
    (state: any) => state.searchQuery 
  );

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 200);
    return () => clearTimeout(setTimeoutId);
  }, [input, dispatch]);

  const { data, isFetching } = useGetFilmsBySearchQuery(
    { keyword }, 
    { skip: keyword.length < 1 }
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }} className='header__search'>
      <input 
        type="text" 
        className="search"
        placeholder='Поиск...'
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          setInput(e.target.value);
          setIsOpen(true);
        }}
        value={input}
      />

      {isFetching && (
        <div style={{ position: 'absolute', right: '10px', top: '10px', color: '#ccc', fontSize: '12px' }}>
          Загрузка...
        </div>
      )}

      {isOpen && data?.films && data.films.length > 0 && (
        <ul className="search-list">
          {data.films.map((movie: any) => (
            <li
              key={movie.filmId}
              onClick={() => {
                navigate(`/movie/${movie.filmId}`);
                setIsOpen(false);
              }}
              className="search-item"
            >
              {movie.nameRu || movie.nameEn} ({movie.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}