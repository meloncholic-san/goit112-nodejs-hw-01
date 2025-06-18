import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import * as fs from 'node:fs/promises';


const normalizeContacts = (input) => {
  if (!Array.isArray(input)) return [input];
  return input.flat(Infinity);
};

export const writeContacts = async (updatedContacts) => {

    try {
        const currentContacts = await readContacts();
        const normalizedNewContacts = await normalizeContacts(updatedContacts)
        const newContacts = [...currentContacts, ...normalizedNewContacts];
        // console.log('New contacts:', newContacts);
        return await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null , 2), {encoding: 'utf-8'});

    }
    catch (error) {
        console.error('Error reading contacts:', error.message);
    }
};
