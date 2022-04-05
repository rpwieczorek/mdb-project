import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './ButtonRemove.module.scss';
import { removeItem } from '../../redux/itemsRedux';

const ButtonRemove = props => {
  const dispatch = useDispatch();
  const itemId = props.id;
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(removeItem(itemId));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.button}>
        <span className={clsx('fa fa-trash ', styles.icon)}></span>
      </button>
    </form>    
  );
};

export default ButtonRemove;