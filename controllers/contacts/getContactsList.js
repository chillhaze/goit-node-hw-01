const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

// get contacts list
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    console.table(contacts);
    return contacts;
  } catch (error) {
    console.error(error);
  }
}

module.exports = listContacts;
