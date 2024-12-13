import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  LoginCredentials,
  RegisterCredentials
} from '@components/types/auth/auth.types';
import { fetchApi } from '@/components/statement/service/api.config';
import {
  setLoading,
  loginSuccess,
  loginFailure,
  logout as logoutAction,
  updateUser,
} from './authSlice';
import { AppDispatch } from '@/components/statement/store/store';

export const login = createAsyncThunk<void, LoginCredentials, { dispatch: AppDispatch }>(
  'auth/login',
  async (credentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      
      // Première requête pour la connexion avec cookies
      await fetchApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          mode: 'cookie'
        }),
      });

      // Deuxième requête pour obtenir les données utilisateur
      const userResponse = await fetchApi('/users/me');

      if (userResponse.data) {
        dispatch(loginSuccess({
          user: userResponse.data
        }));
      } else {
        throw new Error('Format de réponse invalide');
      }
    } catch (error) {
      console.error('Login Error:', error);
      const message = error instanceof Error
        ? error.message
        : 'Email ou mot de passe incorrect';
      dispatch(loginFailure(message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const register = createAsyncThunk<void, RegisterCredentials, { dispatch: AppDispatch }>(
  'auth/register',
  async (credentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      
      const formData = new FormData();
      Object.entries(credentials).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value instanceof File ? value : String(value));
        }
      });

      const response = await fetchApi('/users', {
        method: 'POST',
        body: formData,
      });

      if (response.data) {
        // Connexion automatique après l'inscription
        await dispatch(login({
          email: credentials.email,
          password: credentials.password
        }));
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Une erreur est survenue';
      dispatch(loginFailure(message));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const refreshUserData = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'auth/refreshUserData',
  async (_, { dispatch }) => {
    try {
      const response = await fetchApi('/users/me');
      if (response?.data) {
        dispatch(updateUser(response.data));
        dispatch(loginSuccess({ user: response.data }));
        return;
      }
      throw new Error('Échec de la récupération des données utilisateur');
    } catch (error) {
      console.error('Erreur de rafraîchissement des données utilisateur:', error);
      dispatch(logoutAction());
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'auth/logout',
  async (_, { dispatch }) => {
    try {
      await fetchApi('/auth/logout', {
        method: 'POST',
      });
      dispatch(logoutAction());
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      throw error;
    }
  }
);