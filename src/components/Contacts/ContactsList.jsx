import './ContactsList.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div className="Contacts-list-container">
      <h1>Contacts</h1>

      <ul className="Contacts-list">
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p className="contacts-item">
                {name}: {number}
              </p>
              <button
                type="button"
                className="Contacts__delete-button"
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
