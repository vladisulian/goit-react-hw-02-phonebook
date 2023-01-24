import './ContactsList.css';

export const ContactsList = ({ contacts, filterSearch }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterSearch)
  );

  return (
    <div className="Contacts-list-container">
      <h1>Contacts</h1>

      <ul className="Contacts-list">
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
