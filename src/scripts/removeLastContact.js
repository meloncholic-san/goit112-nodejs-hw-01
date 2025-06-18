import * as fs from 'node:fs/promises';
import { readContacts } from "../utils/readContacts.js";
import { PATH_DB } from '../constants/contacts.js';


export const removeLastContact = async () => {};
    try {
    const contacts = await readContacts();
    contacts.splice(-1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), { encoding: 'utf-8' });
    }
    catch (error) {
    console.error('Error removing contacts:', error.message);
  }


removeLastContact();
