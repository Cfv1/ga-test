import React, {memo, useCallback, useState} from 'react';
import {Box, useMediaQuery, useTheme} from '@mui/material';

import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectContacts} from 'src/store/reducers/contact/contactSelectors';
import Chat from 'src/components/Messenger/parts/Chat/Chat';
import Contacts from 'src/components/Messenger/parts/Contacts/Contacts';
import {MESSENGER_CONTAINER, MESSENGER_CONTAINER_TABLET, MESSENGER_WINDOW} from './styles';

const Messenger = () => {
  const [currentContactIndex, setCurrentContactIndex] = useState<number>();

  const setCurrentContactHandler = useCallback((index: number) => setCurrentContactIndex(index), [setCurrentContactIndex]);

  const contacts = useAppSelector(selectContacts);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={matches ? MESSENGER_CONTAINER : MESSENGER_CONTAINER_TABLET}>
      <Box sx={MESSENGER_WINDOW}>
        <Contacts data={contacts} currentContactIndex={currentContactIndex} onSelect={setCurrentContactHandler} />
        <Chat contact={contacts?.find((contact, i) => i === currentContactIndex)} />
      </Box>
    </Box>
  )
}

export default memo(Messenger);