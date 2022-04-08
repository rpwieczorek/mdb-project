import ItemForm from "../../features/ItemForm/ItemForm";
import List from '../List/List';
import { useSelector } from "react-redux";
import { getItems } from "../../redux/itemsRedux";
import { getCategories } from "../../redux/categoriesRedux";
import { Row,Col, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  const items = useSelector(state => getItems(state));
  const categories = useSelector(state => getCategories(state));

  //Calculating total price in each category
  let allCategoriesInItems = [];
  let totalPriceInEachCategory = [];
  for (let item of items) {
    if (!allCategoriesInItems.includes(item.category)) {
      allCategoriesInItems.push(item.category);
    }
  }
  for (let i=0; i < allCategoriesInItems.length;i++){
    totalPriceInEachCategory[i] = {category: allCategoriesInItems[i], price: 0, numberOfItems: 0,}
    for (let item of items){
      if (item.category === allCategoriesInItems[i]) {
        totalPriceInEachCategory[i].price += parseFloat(item.price); 
        totalPriceInEachCategory[i].numberOfItems++;
      }
    }
  }
  
  // Filtering items for list
  const [filteredItems,setFilteredItems] = useState(items);
  const [filteringCategory,setFilteringCategory] = useState('All categories');
  
  // const sorter = (sortBy) => (a, b) => a.sortBy > b.sortBy ? 1 : -1;
  // items.sort(sorter('name'));
  // console.log("Using sorter", items);

  const handleFiltering = e => {
    e.preventDefault();
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
       ? <List items={items} categories={categories} summary={totalPriceInEachCategory} />
       : <List items={filteredItems} categories={categories} summary={totalPriceInEachCategory} />}  
    </div>
  );
}

export default Home;