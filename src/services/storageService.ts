import localforage from 'localforage';

localforage.config({
  name: 'myApp',
  storeName: 'dataStore',
});

const KEYS = {
  LEADS: 'leads',
  USERS: 'users',
  TOKEN: '@jusCashToken'
};

export const getItem = async <T>(key: string): Promise<T[]> => {
  return (await localforage.getItem<T[]>(key)) || [];
};

export const setItem = async <T>(key: string, value: T[]): Promise<void> => {
  await localforage.setItem(key, value);
};

export const removeItem = async (key: string): Promise<void> => {
  await localforage.removeItem(key);
};

export const clearAll = async (): Promise<void> => {
  await localforage.clear();
};

export { KEYS };
