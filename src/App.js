import ContactAddForm from './components/Phonebook/ContactAddForm';
import ContactList from './components/Phonebook/ContactList';
import Filter from './components/Phonebook/Filter';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import contactsOperations from './redux/contacts/contacts-operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactAddForm  />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;