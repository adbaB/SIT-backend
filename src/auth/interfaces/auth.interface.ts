export interface AuthPayload {
  role: string;
  sub: string;
}

export interface AuthBody {
  username: string;
  password: string;
}
