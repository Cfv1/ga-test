import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';

export const createAppAsyncThunk = createAsyncThunk<any, void, {state: RootState}>;
