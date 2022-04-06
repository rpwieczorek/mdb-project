import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import { fetchItems } from './redux/itemsRedux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchItems()),[dispatch]);
  
  return (
    <Container>
      <Home />
    </Container>
    
  );
}

export default App;
