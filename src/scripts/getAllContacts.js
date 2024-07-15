import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log(`Successfully read an array of contacts from a file ${PATH_DB}`);
    return contacts
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};
console.log(await getAllContacts());