
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {  useSelector } from 'react-redux';


const storageKey= 'contacts';

const getStoredContacts = ()=>{
  const savedContacts = window.localStorage.getItem(storageKey);
  return savedContacts !== null? JSON.parse(savedContacts):[]
    }  



export const App  =()=> {
  
  
    
    

    

    const actualContacts = useSelector (state=>state.contacts);
   
   

   
   

  

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>

          {actualContacts.length > 0 && (
            <div>
              <p>Find contacts by name</p>
              <Filter  />
              <ContactList/>
            </div>
          )}
        </div>
        <GlobalStyle />
      </div>
    );
  


}
