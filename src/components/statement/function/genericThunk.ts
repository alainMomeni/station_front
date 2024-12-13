import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../service/api.config';

interface GenericItem {
  id: string;
  [key: string]: any;
}

export const createGenericThunk = <T extends GenericItem>(entityName: string) => {
  const fetchItems = createAsyncThunk<T[], void>(
    `${entityName}/fetchAll`,
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetchApi(`/items/${entityName}`);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const createItem = createAsyncThunk<T, Omit<T, 'id'>>(
    `${entityName}/create`,
    async (data, { rejectWithValue }) => {
      try {
        const response = await fetchApi(`/items/${entityName}`, {
          method: 'POST',
          body: JSON.stringify(data),
        });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const updateItem = createAsyncThunk<T, T>(
    `${entityName}/update`,
    async (data, { rejectWithValue }) => {
      try {
        const response = await fetchApi(`/items/${entityName}/${data.id}`, {
          method: 'PATCH',
          body: JSON.stringify(data),
        });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const deleteItem = createAsyncThunk<string, string>(
    `${entityName}/delete`,
    async (id, { rejectWithValue }) => {
      try {
        await fetchApi(`/items/${entityName}/${id}`, { method: 'DELETE' });
        return id;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  return { fetchItems, createItem, updateItem, deleteItem };
};
