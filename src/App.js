import Clock from './components/clock';
import PowerButton from './components/powerButton';
import Form from './components/form';
import './assets/stylesheets/App.css';

const App = () => 
{
  const cars = 
  [
    "Toyota Corolla",
    "Honda Civic",
    "Ford Mustang",
    "Chevrolet Camaro",
    "Volkswagen Golf",
    "BMW 3 Series",
    "Mercedes-Benz C-Class",
    "Audi A4",
    "Nissan Altima",
    "Tesla Model S"
  ]

  const carsList = cars.map((car, index) => <li key={index}>{car}</li>)

  return (
    <>
      <Clock class='clock' />
      <PowerButton />

      <ul>{carsList}</ul>

      <Form />
    </>
  );
}

export default App;