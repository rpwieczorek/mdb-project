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
  // Printing
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
            <Col sm={3}>Name</Col>
            <Col sm={3}>Description</Col>
            <Col sm={3}  className="text-center">Category</Col>
            <Col sm={2}  className="text-center">Price</Col>
            <Col sm={1}  className="text-center">Actions</Col>
          </li>
          {props.items.map(item => <li as={Row} key={item.id}  className="p-2 d-flex align-middle justify-content-between border-bottom">
            <Col sm={3}>{item.name}</Col>
            <Col sm={3}>{item.description}</Col>
            <Col sm={3}  className="text-center">{item.category}</Col>
            <Col sm={2}  className="text-center">${item.price}</Col>
            <Col sm={1} className="text-center">
              <ButtonRemove id={item.id} />
              <Link to={'/item/'+ item.id}><ButtonEdit id={item.id} /></Link>
            </Col>
          </li>)}
          <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
            <Col className="text-center">Number of items: {numbersOfItems}</Col>
            <Col className="text-center">Total price: ${totalPrice}</Col>  
          </li>
        </ul>
      
        <h2 className="text-center mt-5">Summary for categories</h2>
        <ul className="list-group">
          <li as={Row} className="p-2 d-flex justify-content-between border btn-secondary">
            <Col sm={3}  className="text-center">Category</Col>
            <Col sm={3}  className="text-center">Nuber of items</Col>
            <Col sm={3}  className="text-center">Total price</Col>
          </li>
          {props.summary.map(summary => <li as={Row} key={summary.category}  className="p-2 d-flex align-middle justify-content-between border-bottom">
            <Col sm={3}  className="text-center">{summary.category}</Col>
            <Col sm={3}  className="text-center">{summary.numberOfItems}</Col>
            <Col sm={3} className="text-center">${summary.price}</Col>
          </li>)}
        </ul>
      </div>
      <div className="text-center mb-3 mt-3">
        <Button onClick={handlePrint}>
          Print or save as PDF file
        </Button>
      </div>
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