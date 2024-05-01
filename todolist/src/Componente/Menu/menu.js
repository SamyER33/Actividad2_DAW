
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';
import {changeOption} from '../../reducers/optionSlice';

function Menu() {
  const changeOptionFunc = (e)=>{

  }
  return (
    <Navbar expand="lg" className="navbar navbar-dar ">
      <Container>
        <Navbar.Brand href="#home" className='color-rosa' >To Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='color-negro' >Tareas</Nav.Link>
            <Nav.Link href="#link" onClick={changeOptionFunc} className='color-negro' >Objetivos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;