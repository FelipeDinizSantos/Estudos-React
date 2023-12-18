import Clock from './clock';
import PowerButton from './powerButton';
import Form from './form';
import Container from './container';
import Globals from './globals';
import ClassComponent from './classComponent';

const InitialPage = () => 
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

      <Container>
        <h1>Elemente Filho</h1>
        <p>Utilizando (props.children)</p>
      </Container>

      <ClassComponent initialState='false' />

      <h1>Variaveis Globias</h1>
      <p>Essas variaveis podem ser chamadas em todo o programa</p>
      <p>Variavel Global: {Globals.globalVar}</p>
    </>
  );
}

export default InitialPage;