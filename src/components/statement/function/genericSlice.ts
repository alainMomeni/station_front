import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createGenericThunk } from './genericThunk';
import { FichePrix } from '@components/types/statement/function.type';
import type { Draft } from 'immer';

interface GenericState<T> {
  data: T[] | null;
  loading: boolean;
  error: string | null;
}

export const createGenericSlice = <T extends { id: string }>(entityName: string) => {
  const thunks = createGenericThunk<T>(entityName);

  const initialState: GenericState<T> = {
    data: null,
    loading: false,
    error: null,
  };

  const slice = createSlice({
    name: entityName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(thunks.fetchItems.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(thunks.fetchItems.fulfilled, (state, action: PayloadAction<T[]>) => {
          state.loading = false;
          state.data = action.payload as Draft<T>[];
        })
        .addCase(thunks.fetchItems.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
        .addCase(thunks.createItem.fulfilled, (state, action: PayloadAction<T>) => {
          if (state.data) {
            state.data.push(action.payload as Draft<T>);
          } else {
            state.data = [action.payload as Draft<T>];
          }
        })
        .addCase(thunks.updateItem.fulfilled, (state, action: PayloadAction<T>) => {
          if (state.data) {
            state.data = state.data.map((item) =>
              item.id === action.payload.id ? action.payload as Draft<T> : item
            );
          }
        })
        .addCase(thunks.deleteItem.fulfilled, (state, action: PayloadAction<string>) => {
          if (state.data) {
            state.data = state.data.filter((item) => item.id !== action.payload);
          }
        });
    },
  });

  return { slice, thunks };
};

// Utilisation de la fonction `createGenericSlice` pour `fichePrix`
const { slice, thunks } = createGenericSlice<FichePrix>('fichePrix');

export const fichePrixThunks = thunks;
export const genericReducer = slice.reducer;
