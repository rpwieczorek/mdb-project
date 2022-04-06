import { useSelector } from "react-redux";
import ItemForm from "../../features/ItemForm/ItemForm";
import List from '../List/List';
import { getItems } from "../../redux/itemsRedux";
import { getCategories } from "../../redux/categoriesRedux";

const Home = () => {
  const items = useSelector(state => getItems(state));
  const categories = useSelector(state => getCategories(state));
  // Put all categorie names to an array
  let categoriesInArr = [];
  for (let category of categories){
    categoriesInArr.push(category.name);
  }

  return (
    <div>
      <ItemForm  categories={categories} />
      <List items={items}/>
    </div>
  );
}

export default Home;