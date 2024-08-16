import { getItem, setItem, KEYS } from './storageService';
import { IFormLogin, IFormRegister } from '../utils/interface';

export const generateRandomIdAndToken = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const registerUser = async (data: IFormRegister) => {
  const users: IFormRegister[] = await getItem<IFormRegister>(KEYS.USERS);

  const emailExists = users.some(user => user.email === data.email);
  if (emailExists) {
    return { success: false, message: 'E-mail já cadastrado' };
  }

  const userId = generateRandomIdAndToken();
  const newUser = { id: userId, ...data };

  users.push(newUser);

  await setItem(KEYS.USERS, users);

  return { success: true, user: newUser };
};

export const loginUser = async (data: IFormLogin) => {
  const users: IFormRegister[] = await getItem<IFormRegister>(KEYS.USERS);

  const user = users.find(user => user.email === data.email);

  if (user && user.password === data.password) {
    const token = generateRandomIdAndToken();

    await setItem(KEYS.TOKEN, [token]);

    return { success: true, token };
  }

  return { success: false, message: 'Email ou senha incorretos' };
};
