import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import { fetchCategories } from './redux/categoriesRedux';
import { fetchItems } from './redux/itemsRedux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchItems()),[dispatch]);
  useEffect(() => dispatch(fetchCategories()),[dispatch]);
  
  return (
    <Container>
      <Home />
    </Container>
    
  );
}

export default App;
