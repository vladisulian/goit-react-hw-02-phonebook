import './ContactsList.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  const sendIdToDelete = e => {
    console.log(e.target.id);
    this.props.SendId(e.target.id);
  };

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
