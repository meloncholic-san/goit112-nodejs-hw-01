import { readContacts } from "../utils/readContacts.js";


export const countContacts = async () => {
    const count = await readContacts();
    return count.length
};

console.log(await countContacts());
