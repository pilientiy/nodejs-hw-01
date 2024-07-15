import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.splice(contacts.length - 1, 1);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log(
        'The last contact is successfully deleted from the array in the file',
        PATH_DB,
        contacts,
      );
    } else {
      console.log('The contact array is empty.');
    }
  } catch (error) {
    console.error('Error while deleting contacts from the array:', error);
  }
};

removeLastContact();
