import {createSlice} from '@reduxjs/toolkit';

interface IUserState {

}

const initialState: IUserState = {

}

const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {}
});

export default MessageSlice;
