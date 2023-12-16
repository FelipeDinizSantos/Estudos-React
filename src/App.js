import ReactLogo from './assets/images/reactLogo.png'; 
import Button from './components/button';
import Clock from './components/clock';
import './assets/stylesheets/App.css';

const App = () => 
{
  return (
    <>
      <Clock class='clock' />

      <img src={ReactLogo} width={100} alt='reactLogo' />
      <p>Hello, World!</p>

      <Button class='btnClick' />
    </>
  );
}

export default App;