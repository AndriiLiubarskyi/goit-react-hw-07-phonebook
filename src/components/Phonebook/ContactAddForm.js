import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactAddForm.module.css';

export default function ContactAddForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
      default: return;
    }
  }

  const findName = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (findName(name)) {
        alert(`${name} is already in contacts!`);
        return;
    }
    dispatch(contactsOperations.addContact({name, number}))
    setName("");
    setNumber("");
  };

  return (
     <div className={styles.addForm}>
         <form onSubmit={handleSubmit} className={styles.form}>
           <label className={styles.label}>
             Name
             <input className={styles.input}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
               required value={name}
               onChange={handleChange}
             />
           </label>
           <label className={styles.label}>
             Number
             <input className={styles.input}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
               value={number}
               onChange={handleChange}
             />
           </label>
           <button className={styles.buttonAdd} type="submit">
             Add contact
           </button>
         </form>
      </div>
  );
};