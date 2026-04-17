import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createContext } from 'react'
import ScrollToTop from '../features/utils/scrollToTop'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Main from '../pages/Main'
import MoviePage from '../pages/Movie'
import ActorPage from '../pages/ActorDetail'
import MoviesTopList from '../pages/MoviesTopList'
import useTheme from '../features/hooks/useTheme'
import { TOP_LISTS } from '../variables'

export const ThemeContext = createContext({})

function App() {
  const {theme, setTheme} = useTheme()

  const onThemeButtonClick = () => {
    // console.log('Current theme:', theme)
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
   <ThemeContext.Provider value={{onThemeButtonClick, theme, setTheme}}>
      <Router> 
        <ScrollToTop />
        <Header />

        <Routes>     
          <Route path="/" element={<Main />}/>               
          <Route path="/movie/:id" element={<MoviePage />}/>               
          <Route path="/actor/:id" element={<ActorPage />}/>                
          {...TOP_LISTS.map((item) => {
            return <Route path={item.url} element={<MoviesTopList />}/>  
          })}             
          <Route path="*" element={<Main />}/>               
        </Routes>

        <Footer />
      </Router>
   </ThemeContext.Provider>
  )
}

export default App