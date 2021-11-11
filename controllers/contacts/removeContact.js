const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

//delete contact
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const updatedContacts = [];

    contacts.map((item) => {
      if (item.id !== contactId) {
        updatedContacts.push(item);

        fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
        console.table(updatedContacts);

        return contacts;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = removeContact;
