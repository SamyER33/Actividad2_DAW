
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormTaskAndGoal.scss';
import { useDispatch } from 'react-redux';
import {
  addGoal
} from '../../reducers/goalsSlice';
import { useRef } from 'react';

function FormTaskAndGoal(props) {

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const dispatch = useDispatch

  const addItem = (e) =>{
    e.preventDefault();
    dispatch(addGoal({'name':inputRefName.current.value, 'description':inputRefDescription.current.value, 'dueDate':inputRefDueDate.current.value}));
  }

  return (
    <div className='space'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del curso</Form.Label>
          <Form.Control type="name" placeholder="" ref={inputRefName}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} ref={inputRefDescription}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Fecha límite</Form.Label>
          <Form.Control type="date" placeholder="Ingrese fecha" ref={inputRefDueDate} />
        </Form.Group>

        <Button variant="success" onClick={addItem}>Añadir objetivo</Button>
      </Form>
    </div>
  );
}

export default FormTaskAndGoal;