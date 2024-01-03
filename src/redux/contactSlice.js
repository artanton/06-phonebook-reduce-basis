import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const inintialState = {
  contacts: [],
};

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      ...newContact,
    },
  };
};

export const deleteContact = contact => {
  return {
    type: 'contacts/delete',
    payload: contact,
  };
};

export const contactsReducer = (state = inintialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const contactExist = state.contacts.some(
        contact => contact.name === action.payload.name
      );

      if (contactExist) {
        Notiflix.Notify.failure(
          ` ${action.payload.name} is already in phonebook `
        );
        return state;
      }
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/delete':
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      return {
        ...state,
        contacts: [...filteredContacts],
      };

    default:
      return state;
  }
};
