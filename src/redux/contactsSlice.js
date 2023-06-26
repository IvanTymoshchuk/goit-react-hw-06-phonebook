import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  list: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
         state.list = [...state.list, action.payload]; // Додавання нового контакта
      },
    },
    prepare: (name, number) => {
      // підготовка для додання нового контакту
      return {
        payload: {
          id: nanoid(),
          name: name.trim(),
          number: number.trim(),
        },
      };
    },
    deleteContacts(state, action)  {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
