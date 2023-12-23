import InitialPage from './components/initialPage';
import SecondaryPage from './components/secondaryPage';
import NotFound from './components/notFound';
import {Routes, Route} from 'react-router-dom';

export default function AppRoutes()
{
    return(
        <Routes>
            <Route exact path='/' element={<InitialPage/>} />
            <Route exact path='/secondary-page/:id' element={<SecondaryPage/>} />
            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
}