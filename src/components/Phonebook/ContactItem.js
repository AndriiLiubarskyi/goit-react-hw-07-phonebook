import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => {
    return (
    <li className={styles.contactItem}>
      <p>{name}: {number}</p>
      <button className={styles.button} type="button"
        onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
    )
};

ContactItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;