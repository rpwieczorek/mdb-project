import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import { fetchCategories } from './redux/categoriesRedux';
import { fetchItems } from './redux/itemsRedux';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';
import EditItem from './features/EditItem/EditItem';


function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchItems()),[dispatch]);
  useEffect(() => dispatch(fetchCategories()),[dispatch]);
  useEffect(() => {
   document.title = "mdb-calculator";
  },[]);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:Id" element={<EditItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Container>
    
  );
}

export default App;
