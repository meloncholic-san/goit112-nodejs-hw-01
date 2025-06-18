import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const readContacts = async () => {
try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
        // console.log(JSON.parse(data));
            if (!data.trim()) {
        return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error.message);
    }
};

// export const readContacts = async () => {
//     return fs.readFile(PATH_DB, {encoding: 'utf-8'});
// };


// readContacts()
// .then((data) => {
//     const contacts = JSON.parse(data); 
//     console.log(contacts);
// })
// .catch((error) =>  console.error('Error reading contacts:', error.message));