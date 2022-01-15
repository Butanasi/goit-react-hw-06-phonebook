import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsRedux/action';
import { ElemListContact } from '../ElemListContact';
import style from './ContainerList.module.scss';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <ElemListContact
            name={name}
            number={number}
            id={id}
            func={id => dispatch(removeContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
