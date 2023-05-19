export interface User {
  email: string;
  permissions: string[];
  roles: string[];
  name: string;
  token?: string;
  refreshToken?: string;
}