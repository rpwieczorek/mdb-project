import clsx from 'clsx';
import styles from './ButtonEdit.module.scss';

const ButtonEdit = () => {

  return (
    <button className={styles.button}>
      <span className={clsx('fa fa-edit ', styles.icon)}></span>
    </button>
  );
};

export default ButtonEdit;