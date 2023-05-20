import React, {memo} from 'react';
import {Box} from '@mui/material';
import AddContactSection from './AddContactSection/AddContactSection';
import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectContacts} from 'src/store/reducers/contact/contactSelectors';
import Contact from './Contact/Contact';
import {CONTACTS_CONTAINER, CONTACTS_ROOT} from './styles';

const Contacts = () => {
  const contacts = useAppSelector(selectContacts);

  return (
    <Box width="30%" sx={CONTACTS_ROOT}>
      <Box sx={CONTACTS_CONTAINER}>
        {contacts.map(contact => (
          <Contact key={contact.id} data={contact}/>
        ))}

        <AddContactSection mode={contacts.length === 0 ? 'simple' : 'small'} />
      </Box>
    </Box>
  )
}

export default memo(Contacts)