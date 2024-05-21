
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Componente/Item/item.js';
import Menu from './Componente/Menu/menu.js';
import FormTaskAndGoal from './Componente/FormTaskAndGoal/FormTaskAndGoal.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Componente/AddingMobileButton/AddingMobileButton.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTodo } from './reducers/todoSlice.js';
import { addGoal } from './reducers/goalsSlice.js'

function App() {
  const goals = useSelector((state)=>state.goals.value);
  console.log(goals)
  // const option = useSelector((state)=>state.option.value);
  // const remove = useSelector((state)=>state.remove.value);
  // const task = useSelector((state)=>state.task.value);
  // const todo = useSelector((state)=>state.todo.value);
  const dispatch = useDispatch();

  function initFetch(){
    fetch("http://localhost:3001/tasks/getTasks",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization":"cursodedesarrollodeaplicacionesweb"
      }
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      response.map((task)=>{
        dispatch((initAddTodo(task)));
      })
    }).catch((err)=>{
      console.log(err);
    });

    fetch("http://localhost:3001/goals/getGoals",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization":"cursodedesarrollodeaplicacionesweb"
      }
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      response.map((goals)=>{
        dispatch((addGoal(goals)));
      })
    }).catch((err)=>{
      console.log(err);
    });
  }

  useEffect(()=>{
    initFetch();
  },[]);

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
