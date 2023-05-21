import React, {memo} from 'react';
import {Box, IconButton, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AddContactModal from 'src/components/Messenger/parts/Contacts/AddContactModal/AddContactModal';
import {useModal} from 'src/common/helpers/hooks/useModal';
import {useActions} from 'src/store/helpers/hooks/useActions';
import {IContactInfo} from 'src/models/IContactInfo';
import {ADD_CONTACT, BUTTON, BUTTON_SMALL, ABSOLUTE_CONTAINER} from './styles';

interface IAddContactSection {
  mode?: 'small' | 'simple';
}

const AddContactSection = (props: IAddContactSection) => {
  const {mode = 'simple'} = props;

  const {createContact} = useActions();
  const {open, onOpen, onClose} = useModal();

  const onModalSuccess = (data: IContactInfo) => {
    createContact(data);
    onClose();
  }

  const isSmall = mode === 'small';

  return (
    <>
      <AddContactModal isOpen={open} onSuccess={onModalSuccess} onCancel={onClose}/>

      <Box sx={isSmall ? ABSOLUTE_CONTAINER : {}}>
        <Stack sx={ADD_CONTACT} spacing={1}>
          {!isSmall && <Box>Добавить чат, чтобы начать переписку</Box>}
          <IconButton onClick={onOpen}>
            <AddIcon color="primary" sx={isSmall ? BUTTON_SMALL : BUTTON} />
          </IconButton>
        </Stack>
      </Box>
    </>
  )
}

export default memo(AddContactSection);