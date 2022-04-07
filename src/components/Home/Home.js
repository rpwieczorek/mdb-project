import ItemForm from "../../features/ItemForm/ItemForm";
import List from '../List/List';
import { useSelector } from "react-redux";
import { getItems } from "../../redux/itemsRedux";
import { getCategories } from "../../redux/categoriesRedux";
import { Row,Col, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";


const Home = () => {
  const items = useSelector(state => getItems(state));
  const categories = useSelector(state => getCategories(state));


  // Filtering items for list
  
  const [filteredItems,setFilteredItems] = useState(items);
  const [filteringCategory,setFilteringCategory] = useState('All categories');
  
  const handleFiltering = e => {
    e.preventDefault();
    // console.log()
    // if (e.target.value === 'All categories') setFilteringCategory('undefined');
    // console.log(filteringCategory);
    setFilteredItems(items.filter(item => item.category === filteringCategory));   
  };

  return (
    <div>
      <ItemForm categories={categories} />

      <form onSubmit={(e) => handleFiltering(e)} >
      <h2 className="text-center mt-5 mb-3">Filter list by categories</h2>
      <div className="text-center ">
        <Form.Group as={Row} className="mb-3" controlId="category">
          <Col sm={2}></Col>
          <Col sm={6}  className="text-center ">
            <Form.Select onChange={(e) => setFilteringCategory(e.target.value)}>
              <option>All categories</option>
              {categories.map(category => <option key={category.id}>{category.name}</option>)}           
            </Form.Select>
          </Col>
          <Col sm={2}>
            <Button type="submit">
              Filter           
            </Button>
          </Col>
          <Col sm={2}></Col>
        </Form.Group> 
        </div>
      
    </form>
      {filteringCategory === 'All categories' 
       ? <List items={items} categories={categories} />
       : <List items={filteredItems} categories={categories} />}
      
    </div>
  );
}

export default Home;