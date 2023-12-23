import InitialPage from './components/initialPage';
import SecondaryPage from './components/secondaryPage';
import {Routes, Route, Link} from 'react-router-dom';

export default function App() 
{
  return(
    <>
      <header>
        <Link to='/initial-page'> InitialPage </Link>
        <br />
        <Link to='/secondary-page'> SecondaryPage </Link>
      </header>
      <main>
        <Routes>
          <Route path='/initial-page' element={<InitialPage />} />
          <Route path='/secondary-page' element={<SecondaryPage />} />
        </Routes>
      </main>
    </>
  )
}