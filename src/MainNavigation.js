import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Repo from './pages/repo';

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/repo' element={<Repo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default MainNavigation