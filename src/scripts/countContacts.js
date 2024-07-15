import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      const contacts = JSON.parse(data);
      console.log(contacts);
      const count = contacts.length; 
      console.log(`Number of contacts in an array form the file ${PATH_DB} are: ${count}`);
      return count;
    } catch (error) {
      console.error('Error while reading a file:', error);
    }
  };
  
  console.log(await countContacts());