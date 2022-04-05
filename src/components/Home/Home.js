import { useSelector } from "react-redux";
import ItemForm from "../../features/ItemForm/ItemForm";
import List from '../List/List';

const Home = () => {
  const items = useSelector(state => state.items);
  // console.log(items);

  return (
    <div>
      <ItemForm />
      <List items={items} />
    </div>
  );
}

export default Home;