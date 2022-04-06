import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './ButtonEdit.module.scss';
import { removeItemRequest } from '../../redux/itemsRedux';
import PropTypes from 'prop-types';

const ButtonEdit = props => {
  // const dispatch = useDispatch();
  // const itemId = props.id;
  
  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(removeItemRequest(itemId));
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.button}>
        <span className={clsx('fa fa-edit ', styles.icon)}></span>
      </button>
    </form>    
  );
};

ButtonEdit.propTypes = {
  id: PropTypes.string.isRequired
};

export default ButtonEdit;