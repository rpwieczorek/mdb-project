import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const ItemForm = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  
  const handleAdd = e => {
    e.preventDefault();
    console.log('handleAdd');
  }
  return (
    <form onSubmit={handleAdd}>
      <Form.Group as={Row} className="mb-3" controlId="name" onChange={(e) => setName(e.target.value)}>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={2}>
          <Form.Control placeholder="Enter name of a part"></Form.Control>
        </Col>    
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="description" onChange={(e) => setDescription(e.target.value)}>
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={2}>
          <Form.Control placeholder="Enter details of a part"></Form.Control>
        </Col>    
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="category" onChange={(e) => setCategory(e.target.value)}>
        <Form.Label column sm={2}>
          Category
        </Form.Label>
        <Col sm={2}>
          <Form.Select >
            <option>Peripherals</option>
            <option>Computer components</option>
            <option>Software</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="price" onChange={(e) => setPrice(e.target.value)}>
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={2}>
          <Form.Control placeholder="Enter the price of a part"></Form.Control>
        </Col>    
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default ItemForm;