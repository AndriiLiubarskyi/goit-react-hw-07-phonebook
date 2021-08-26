import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ContactItem from './ContactItem';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id))

  return (
  <ul>
    {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={()=> onDeleteContact(id)}
        />
      ))}
    </ul>
    )
};

export default ContactList;