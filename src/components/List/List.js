import { Row, Col } from "react-bootstrap";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import PropTypes from 'prop-types';

const List = props => {
  // Count listed items and total pirce of listed items
  const numbersOfItems = props.items.length;
  let totalPrice = 0;
  for (let item of props.items){
    totalPrice += parseFloat(item.price);
  }
  
  return (
    <div className="mx-auto">
      <h2 className="text-center mt-5">List of parts</h2>
      <ul className="list-group">
        <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
          <Col>Name</Col>
          <Col>Description</Col>
          <Col>Category</Col>
          <Col>Price</Col>
          <Col>Remove</Col>
        </li>
        {props.items.map(item => <li as={Row} key={item.id}  className="p-2 d-flex justify-content-between border-bottom">
          <Col>{item.name}</Col>
          <Col>{item.description}</Col>
          <Col>{item.category}</Col>
          <Col>${item.price}</Col>
          <Col><ButtonRemove id={item.id} /></Col>
        </li>)}
        <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
          <Col>Number of items: {numbersOfItems}</Col>
          <Col>Total price: ${totalPrice}</Col>  
        </li>
      </ul>
    </div>
  );
}

List.propTypes = {
  requiredArrayOf: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired})
}

export default List;