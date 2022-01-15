import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterRedux/action';
import style from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className={style.label}>Find contacts by name</label>
      <input
        className={style.input}
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </>
  );
};
