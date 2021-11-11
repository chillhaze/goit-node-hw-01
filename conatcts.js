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

//get contact by id
async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    contacts.map((item) => {
      if (item.id === contactId) {
        console.table(item);
        return item;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

//add new contact
async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    let contactNewId = 0;

    for (let i = 0; i < contacts.length + 1; i++) {
      contactNewId = i + 1;
    }

    const newContact = {
      id: contactNewId,
      name,
      email,
      phone,
    };

    const updatedContacts = [...contacts, newContact];

    fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    console.table(updatedContacts);

    return contacts;
  } catch (error) {
    console.error(error);
  }

  fs.readFile(contactsPath, "utf8")
    .then((data) => {
      const parsedData = JSON.parse(data);
    })
    .catch((error) => console.log(error));
}

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

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
