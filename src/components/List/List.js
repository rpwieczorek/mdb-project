import { Row, Col } from "react-bootstrap";

const List = props => {
  const numbersOfItems = props.items.length;
  let totalPrice = 0;
  for (let item of props.items){
    totalPrice += item.price;
  }
  
  return (
    <div>
      <h2>List of parts</h2>
      <ul className="list-group">
        <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
          <Col>Name</Col>
          <Col>Description</Col>
          <Col>Category</Col>
          <Col>Price</Col>
        </li>
        {props.items.map(item => <li as={Row} key={item.id}  className="p-2 d-flex justify-content-between border-bottom">
          <Col>{item.name}</Col>
          <Col>{item.description}</Col>
          <Col>{item.category}</Col>
          <Col>${item.price}</Col>
        </li>)}
        <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
          <Col>Numbers of item: {numbersOfItems}</Col>
          <Col>Total price: ${totalPrice}</Col>  
        </li>

      </ul>
     
     
    </div>
  );
}

export default List;