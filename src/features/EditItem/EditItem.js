import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { modifyItemRequest } from "../../redux/itemsRedux";
import { addCategoryRequest, getCategories } from "../../redux/categoriesRedux";
import { useParams, useNavigate } from "react-router-dom";
import { getItemDataById } from "../../redux/itemsRedux";

const EditItem = () => {
  const params = useParams();
  const itemId = params.Id;

  let item = {
    id: -1,
    name: -1,
    description: -1,
    category: -1,
    price: -1,
  };

  item = useSelector(state => getItemDataById(state, itemId)) || item;
  const categories = useSelector(state => getCategories(state));

  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [newCategoryName, setNewCategoryName] = useState();
  const [price, setPrice] = useState(item.price);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(item.id === -1){
       navigate('/', { replace: true });
     }
  },[item.id]);

  const handleModifyItem = e => {
    e.preventDefault();
    const item = {
      id: itemId,
      name: name,
      description: description,
      category: category,
      price: parseFloat(price),
    };

    dispatch(modifyItemRequest(item));
  }

  const handleAddCategory = e => {
    e.preventDefault();
    const newCategory = {
      id: shortid(),
      name: newCategoryName,
    }
    dispatch(addCategoryRequest(newCategory));
  } 
  
  return (
    <form onSubmit={handleModifyItem}>
      <h2 className="text-center mt-5 mb-3">Add item to the list</h2>
      <Form.Group as={Row} className="mb-3" controlId="name">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control value={name}  onChange={(e) => setName(e.target.value)}></Form.Control>    
        </Col>    
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="description">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
        </Col>    
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="category" >
        <Form.Label column sm={2} >
          Category
        </Form.Label>
        <Col sm={10}>
          <Form.Select value={category}  onChange={(e) => setCategory(e.target.value)}>
            {categories.map(category => <option key={category.id}>{category.name}</option>)}           
          </Form.Select>
        </Col>
      </Form.Group>
     
      <Form.Group as={Row} className="mb-3" controlId="newCategory" onChange={(e) => setNewCategoryName(e.target.value)}>
        <Form.Label column sm={2}>          
        </Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="Enter a new category name">
          </Form.Control>
          <Button className="mt-2" onClick={handleAddCategory} variant="secondary">
            Add a new category
          </Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="price" >
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={10}>
          <Form.Control value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
        </Col>    
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Modify item
      </Button>
    </form>
  );
};

export default EditItem;