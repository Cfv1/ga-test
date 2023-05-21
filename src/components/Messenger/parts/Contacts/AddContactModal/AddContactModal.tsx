import React, {memo, useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog/Dialog';
import HelpIcon from '@mui/icons-material/Help';
import {Box, Button, DialogActions, DialogTitle, Stack, TextField, Tooltip} from '@mui/material';

import {IContactInfo} from 'src/models/IContactInfo';
import {isCorrectPhone} from 'src/common/helpers/isForPhone';
import {FORM, PHONE_HELP_ICON, PHONE_LABEL} from './styles';

interface IAddContactModalProps {
  isOpen: boolean;
  onCancel(): void;
  onSuccess(data: IContactInfo): void;
}

const AddContactModal = (props: IAddContactModalProps) => {
  const {onCancel, onSuccess, isOpen} = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const setNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const setPhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    const phoneWithoutSpaces = text.split(' ').join('');
    setPhoneError(phoneWithoutSpaces.length > 0 ? !isCorrectPhone : false);
    setPhone(phoneWithoutSpaces);
  }

  const onSuccessHandler = () => {
    onSuccess({phone, name});
  }

  const phoneLabel = () => {
    const label = "Введите номер телефона";

    if(!phoneError || phone.length === 0) {
      return label;
    }

    return (
      <Box sx={PHONE_LABEL}>
        {label}
        <Tooltip title="Введите номер формата 7123456789">
          <HelpIcon color="disabled" sx={PHONE_HELP_ICON} />
        </Tooltip>
      </Box>
    )
  }

  useEffect(() => {
    if(!isOpen) {
      setPhone('');
      setName('');
      setPhoneError(false)
    }
  }, [isOpen]);

  const isDisabledButton = phoneError || name.length === 0 || phone.length === 0;

  return (
    <Dialog open={isOpen}>
      <DialogTitle align="center" variant="h5">
        Создать контакт
      </DialogTitle>

      <Box
        sx={FORM}
        component="form"
        autoComplete="off"
      >
        <Stack spacing={2} width={500}>
          <TextField
            label="Введите имя"
            placeholder="Имя"
            value={name}
            onChange={setNameHandler}
          />

            <TextField
              label={phoneLabel()}
              placeholder="Номер телефона"
              value={phone}
              onChange={setPhoneHandler}
              error={phoneError}
            />
        </Stack>
      </Box>

      <DialogActions>
        <Button onClick={onCancel} color="error">Отмена</Button>
        <Button onClick={onSuccessHandler} disabled={isDisabledButton} color="primary">Да</Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(AddContactModal);