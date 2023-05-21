import React, {memo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Stack, TextField} from '@mui/material';

import BaseLayout from '../BaseLayout/BaseLayout';
import {useSuccessCommunication} from 'src/common/helpers/hooks/useSuccessCommunication';
import {useErrorCommunication} from 'src/common/helpers/hooks/useErrorCommunication';
import {useAppDispatch} from 'src/store/helpers/hooks/useAppDispatch';
import {useAppSelector} from 'src/store/helpers/hooks/useAppSelector';
import {selectCommunication} from 'src/store/reducers/account/accountSelectors';
import {getAccountState} from 'src/store/services/account';
import {FORM, LOGIN_BUTTON} from './styles';

const Login = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const navigate = useNavigate();
  const communication = useAppSelector(selectCommunication);

  const dispatch = useAppDispatch();

  const setIdInstanceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdInstance(event.target.value);
  }

  const setApiTokenInstanceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiTokenInstance(event.target.value);
  }

  const onAuthorize = () => {
    dispatch(getAccountState({idInstance, apiTokenInstance}));
  }

  useSuccessCommunication(communication, () => navigate('/'));
  useErrorCommunication(communication);

  const isDisabledButton = idInstance.length === 0 || apiTokenInstance.length === 0;

  return (
    <BaseLayout>
      <Box
        sx={FORM}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} width={500}>
          <TextField
            label="Введите Id Instance"
            placeholder="Id Instance"
            value={idInstance}
            onChange={setIdInstanceHandler}
          />

          <TextField
            label="Api Token Instance"
            placeholder="Введите Api Token Instance"
            value={apiTokenInstance}
            onChange={setApiTokenInstanceHandler}
          />

          <Button variant="contained" disabled={isDisabledButton} sx={LOGIN_BUTTON} onClick={onAuthorize}>
            Войти
          </Button>
        </Stack>
      </Box>
    </BaseLayout>
  )
}

export default memo(Login);