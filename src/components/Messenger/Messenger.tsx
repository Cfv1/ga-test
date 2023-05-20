import React, {memo, useCallback, useState} from 'react';
import {Box} from '@mui/material';
import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectContacts} from 'src/store/reducers/contact/contactSelectors';
import Chat from 'src/components/Messenger/parts/Chat/Chat';
import Contacts from 'src/components/Messenger/parts/Contacts/Contacts';
import {MESSENGER_CONTAINER, MESSENGER_WINDOW} from './styles';

const Messenger = () => {
  const [currentContactIndex, setCurrentContactIndex] = useState<number>();

  const setCurrentContactHandler = useCallback((index: number) => setCurrentContactIndex(index), [setCurrentContactIndex]);

  const contacts = useAppSelector(selectContacts);

  return (
    <Box sx={MESSENGER_CONTAINER}>
      <Box sx={MESSENGER_WINDOW}>
        <Contacts data={contacts} currentContactIndex={currentContactIndex} onSelect={setCurrentContactHandler} />
        <Chat contact={contacts?.find((contact, i) => i === currentContactIndex)} />
      </Box>
    </Box>
  )
}

export default memo(Messenger);