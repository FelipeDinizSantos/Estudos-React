import AppRoutes from './AppRoutes';
import { useNavigate, Link } from 'react-router-dom'; // Ou LINK

export default function App() 
{
  const navigate = useNavigate();
  const goHome =()=>
  {
    navigate('/');
  }

  return(
    <>
      <header>
        <button type='button' onClick={goHome}>InitialPage</button> <br/>
        <Link to='/secondary-page/Isa'>SecondaryPage</Link>
      </header>
      <AppRoutes />
    </>
  )
}