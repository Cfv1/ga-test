import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';

export const createAppAsyncThunk = <T = void>() => createAsyncThunk<any, T, {state: RootState}>;
