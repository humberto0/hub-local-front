import { User } from "../../types/user";

export interface Update {
  email: string;
  permissions: string[];
  roles: string[];
  name: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
