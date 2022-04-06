import { Row, Col, Button } from "react-bootstrap";
import ButtonRemove from "../ButtonRemove/ButtonRemove";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const List = props => {
  // Count listed items and total pirce of listed items
  const numbersOfItems = props.items.length;
  let totalPrice = 0;
  for (let item of props.items){
    totalPrice += parseFloat(item.price);
  }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="mx-auto m-2 p-3" ref={componentRef}>
        <h2 className="text-center mt-5">List of parts</h2>
        <ul className="list-group">
          <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
            <Col>Name</Col>
            <Col>Description</Col>
            <Col sm={2}  className="text-center">Category</Col>
            <Col sm={1}  className="text-center">Price</Col>
            <Col sm={1}  className="text-center">Actions</Col>
          </li>
          {props.items.map(item => <li as={Row} key={item.id}  className="p-2 d-flex align-middle justify-content-between border-bottom">
            <Col>{item.name}</Col>
            <Col>{item.description}</Col>
            <Col sm={2}  className="text-center">{item.category}</Col>
            <Col sm={1}  className="text-center">${item.price}</Col>
            <Col sm={1} className="text-center">
              <ButtonRemove id={item.id} />
              <Link to={'/item/'+ item.id}><ButtonEdit id={item.id} /></Link>
            </Col>
          </li>)}
          <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
            <Col>Number of items: {numbersOfItems}</Col>
            <Col>Total price: ${totalPrice}</Col>  
          </li>
        </ul>
      </div>
      <Button onClick={handlePrint}>
        Print or save as PDF file
      </Button>
    </>
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