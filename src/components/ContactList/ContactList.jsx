import React from 'react';
import { ListWrap, List } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts());

  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          {name + ' : ' + number}

          <Button type="button" onClick={handleDelete}>
            <UserDeleteOutlined />
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

export default ContactList;
