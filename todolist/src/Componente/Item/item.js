
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { useDispatch } from 'react-redux';
import { removeGoal, editGoal } from '../../reducers/goalsSlice';

function Item(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeGoal(props.name));
  };

  const handleEdit = () => {
    dispatch(editGoal(props.name));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title >{props.name}</Card.Title>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'>
          Descripción
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Fecha límite
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info" onClick={handleEdit}>Editar</Button>
        <Button variant="danger" onClick={handleRemove}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;