import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';

export const createAppAsyncThunk = <TResponse = any, TRequest = void>() => createAsyncThunk<TResponse, TRequest, {state: RootState}>;
