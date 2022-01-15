import { useState } from 'react';
import { addContact } from '../../redux/contactsRedux/action';
import style from './Form.module.scss';
import { getContact } from '../../redux/selector';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const findReturnName = contacts.find(contact => contact.name === name);
    if (findReturnName) {
      alert('This name is already in the phone book ');
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(contact));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={style.label}>Tel</label>
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
