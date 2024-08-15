import localforage from 'localforage';
import { IFormLogin, IFormRegister } from '../utils/interface';

localforage.config({
  name: 'myApp',
  storeName: 'users',
});

const generateRandomIdAndToken = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const Register = async (data: IFormRegister) => {
  const users: IFormRegister[] = (await localforage.getItem('users')) || [];

  const emailExists = users.some(user => user.email === data.email);
  if (emailExists) {
    return { success: false, message: 'E-mail já cadastrado' };
  }
  
  const userId = generateRandomIdAndToken();
  const newUser = { id: userId, ...data };

  users.push(newUser);

  await localforage.setItem('users', users);
 
  return { success: true, user: newUser };
};

export const Login = async (data: IFormLogin) => {

  const users: IFormRegister[] = (await localforage.getItem('users')) || [];

  const user = users.find(user => user.email === data.email);

  if (user && user.password === data.password) {
    const token = generateRandomIdAndToken();

    localforage.setItem('@jusCashToken', token);

    return { success: true, token };
  }

  return { success: false, message: 'Email ou senha incorretos' };
};