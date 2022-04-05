import { useSelector } from "react-redux";
import ItemForm from "../../features/ItemForm/ItemForm";
import List from '../List/List';
import { getItems } from "../../redux/itemsRedux";

const Home = () => {
  const items = useSelector(state => getItems(state));
  // console.log(items);

  return (
    <div>
      <ItemForm />
      <List items={items} />
    </div>
  );
}

export default Home;