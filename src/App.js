import { Form } from './Components/Form';
import { ContactList } from './Components/ContactList';
import { Filter } from './Components/Filter';
import style from './App.module.scss';
import { getContact, getFilter } from './redux/selector';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <Form />
      <h2 className={style.title}>Contacts</h2>
      <Filter />
      <ContactList contacts={getVisibleContacts()} />
    </div>
  );
}

export default App;
