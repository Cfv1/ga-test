import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Box, useMediaQuery, useTheme} from '@mui/material';

import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectContacts} from 'src/store/reducers/contact/contactSelectors';
import {deleteNotification, receiveNotification} from 'src/store/services/message';
import {INotification} from 'src/models/INotification';
import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import Chat from './parts/Chat/Chat';
import Contacts from './parts/Contacts/Contacts';
import {MESSENGER_CONTAINER, MESSENGER_CONTAINER_TABLET, MESSENGER_WINDOW} from './styles';

const Messenger = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(contacts.length !== 0) {
      let intervalId = setInterval(() => {
        try {
          dispatch(receiveNotification()).then(response => {
            const data = (response.payload as INotification | null);
            if(data) {
              dispatch(deleteNotification(data.receiptId));
            }
          });
        } catch (e) {
          console.log(e);
        }
      }, 5000);

      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contacts.length]);

  const [currentContactIndex, setCurrentContactIndex] = useState<number>();

  const setCurrentContactHandler = useCallback((index: number) => setCurrentContactIndex(index), [setCurrentContactIndex]);

  const currentContact = useMemo(() => contacts?.find((contact, i) => i === currentContactIndex), [contacts, currentContactIndex]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={matches ? MESSENGER_CONTAINER : MESSENGER_CONTAINER_TABLET}>
      <Box sx={MESSENGER_WINDOW}>
        <Contacts data={contacts} currentContactIndex={currentContactIndex} onSelect={setCurrentContactHandler} />
        <Chat contact={currentContact} />
      </Box>
    </Box>
  )
}

export default memo(Messenger);