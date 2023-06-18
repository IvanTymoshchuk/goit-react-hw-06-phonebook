import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import initialContacts from './data/contacts.json';
// import useLocaleStorage from './hooks/useLocaleStorage';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import FormList from './FormList/FormList';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { notifyOptions } from './notifyOptions/notifyOptions';

function App() {
  // const [contacts, setContacts] = useLocaleStorage('contacts', initialContacts); // чомусь не працює га гіті
  const [filter, setFilter] = useState('');

  // записуємо у локал сторедж те що користувач вписує , якщо нічого не має то буде значення по дефолту
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );

  useEffect(() => {
    // якщо користувач щось вписував то ми відображаємо йому це з локал сторедж
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      toast.error(`${name}: is already in contacts`, notifyOptions);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Layout>
      <GlobalTitle title="Phonebook" />
      <FormList onSubmit={addContact} />
      <GlobalTitle title="Contacts" />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
      <ToastContainer />
    </Layout>
  );
}

export default App;
