import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    console.log(contacts);
    
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
      
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log(`Successfully added to ${number} new contacts to the file ${PATH_DB}`);
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

generateContacts(3);
