import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
//якщо треба ОБОВ'ЯЗКОВО використовувати writeContacts, то можно зробити перевірку writeFile("") на пустий масив або ключове слово delete, і видаляти контакти, бо зараз writeContacts ЗАВЖДИ тільки додає.
export const removeAllContacts = async () => {
 try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), { encoding: 'utf-8' });
    console.log('All contacts removed.');
  } catch (error) {
    console.error('Error removing contacts:', error.message);
  }
};

removeAllContacts();
