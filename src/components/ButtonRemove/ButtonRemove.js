import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './ButtonRemove.module.scss';
import { removeItemRequest } from '../../redux/itemsRedux';
import PropTypes from 'prop-types';

const ButtonRemove = props => {
  const dispatch = useDispatch();
  const itemId = props.id;
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(removeItemRequest(itemId));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.button}>
        <span className={clsx('fa fa-trash ', styles.icon)}></span>
      </button>
    </form>    
  );
};

ButtonRemove.propTypes = {
  id: PropTypes.string.isRequired
};

export default ButtonRemove;