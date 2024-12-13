import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/components/statement/store/store';
import { refreshUserData } from '@components/statement/auth/authThunks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!auth.user) {
          await dispatch(refreshUserData()).unwrap();
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, [dispatch]);

  return auth;
};