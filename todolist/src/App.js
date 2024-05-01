
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componente/Item/item.js';
import Menu from './Componente/Menu/menu.js';
import FormTaskAndGoal from './Componente/FormTaskAndGoal/FormTaskAndGoal.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Componente/AddingMobileButton/AddingMobileButton.js';
import { useSelector } from 'react-redux';

const list = [
  {
    'name' : 'Ganar curso',
    'description' : 'Ganar curso de desarrollo web',
    'dueDate' : '29/04/2024'
  },
  {
    'name' : 'Arreglar errores',
    'description' : 'Revisar detenidamente las tareas',
    'dueDate' : '04/05/2024'
  },
  {
    'name' : 'Ir al salón de belleza',
    'description' : 'Cita programada con el spa',
    'dueDate' : '05/05/2024'
  },
  {
    'name' : 'Mirar televisión',
    'description' : 'Mirar el estreno de Cold Case',
    'dueDate' : '01/05/2024'
  },
  {
    'name' : 'Limpiar casa',
    'description' : 'Lavar los platos, la ropa y limpiar mi habitación',
    'dueDate' : '08/05/2024'
  },
]
function App() {
  const goals = useSelector((state)=>state.goals.value);
  return (
    <div className="App">
      <Menu/>
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs={0} sm={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
            <div className='scrolling'>
              {goals.map((task,index)=>(
                <Item key={index} name={task.name} description={task.description} dueDate={task.dueDate}/>
            ))}
            </div>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
