export interface User {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  profilePhoto: string | null;
  email: string;
  role_id: string | null;
  status: 'active' | 'inactive' | 'suspended';
  last_login: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  nom: string;
  prenom: string;
  telephone?: string;
  profilePhoto?: File | null;
}

export interface AuthResponse {
  user: User;
  access_token: string;
}

export interface LoginResponse extends AuthResponse {}
export interface RegisterResponse extends AuthResponse {}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
}

export interface HeaderProps {
  toggleSidebar: () => void;
}

export interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export interface GetCurrentUserResponse {
  data: User;
}