import { useState, useCallback } from 'react';
import { useAppDispatch } from '@components/statement/store/store';
import { createGenericThunk } from '@/components/statement/function/genericThunk';

export function useGenericCrud<T extends { id: string }>(entityName: string) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    fetchItems,
    createItem,
    updateItem,
    deleteItem,
  } = createGenericThunk<T>(entityName);

  const handleFetch = useCallback(async () => {
    setLoading(true);
    try {
      const result = await dispatch(fetchItems()).unwrap();
      setError(null);
      return result;
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, [dispatch, fetchItems]);

  const handleCreate = useCallback(async (data: Omit<T, 'id'>) => {
    setLoading(true);
    try {
      const result = await dispatch(createItem(data)).unwrap();
      setError(null);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, [dispatch, createItem]);

  const handleUpdate = useCallback(async (data: T) => {
    setLoading(true);
    try {
      const result = await dispatch(updateItem(data)).unwrap();
      setError(null);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, [dispatch, updateItem]);

  const handleDelete = useCallback(async (id: string) => {
    setLoading(true);
    try {
      await dispatch(deleteItem(id)).unwrap();
      setError(null);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, [dispatch, deleteItem]);

  return {
    loading,
    error,
    handleFetch,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
}
