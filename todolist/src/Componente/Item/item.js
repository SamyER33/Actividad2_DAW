
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item(props) {
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
        <Button variant="info">Editar</Button>
        <Button variant="info">Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;