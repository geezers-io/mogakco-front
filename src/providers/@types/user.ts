import { Empty, Me } from 'providers/@types/common';

export interface JoinRequest {
  email: string;
  password: string;
}

export interface JoinResponse {
  me: Me;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  me: Me;
}

export interface UserServiceClient {
  authenticate(): Promise<Empty>;

  authenticateWithSSR(sessionValue: string): Promise<void>;

  join(request: JoinRequest): Promise<JoinResponse>;

  login(request: LoginRequest): Promise<LoginResponse>;

  logout(): Promise<Empty>;
}
