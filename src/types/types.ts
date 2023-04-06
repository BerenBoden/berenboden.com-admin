export type Login = {
  email: string;
  password: string;
};

export type Register = {
  email: string;
  password: string;
  name: string;
};

export type AuthError = {
  status: number;
  data: any;
};

