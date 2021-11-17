const fs = require("fs").promises;

const contactsPath = require("./contactsPath");

// get contacts list
const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error(error);
  }
};

module.exports = listContacts;
