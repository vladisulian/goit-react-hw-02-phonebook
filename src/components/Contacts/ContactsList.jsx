import './ContactsList.css';

export const ContactsList = ({ contacts }) => {
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
              <button type="button" className="Contacts__delete-button">
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
