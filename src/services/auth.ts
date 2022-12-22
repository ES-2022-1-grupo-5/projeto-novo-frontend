export interface SignInParams {
  email: string;
  password: string;
}

const signin = ({ email, password }: SignInParams) => {
  //   return axios.post('/api/auth/login', { email, password });
  return {
    user: {
      id: 1,
      name: 'John Doe',
      email: email,
    },
    token: '1234567890',
  };
};

export const AuthService = {
  signin,
};
