const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

// get contacts list
function listContacts() {
  fs.readFile(contactsPath, "utf8")
    .then((data) => console.table(JSON.parse(data)))
    .catch((error) => console.error(error));
}

//get contact by id
function getContactById(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then((data) => {
      JSON.parse(data).map((item) => {
        if (item.id === contactId) {
          console.table(item);
        }
      });
    })
    .catch((error) => console.log(error));
}

//add new contact
function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8")
    .then((data) => {
      const parsedData = JSON.parse(data);

      let contactNewId = 0;
      for (let i = 0; i < parsedData.length + 1; i++) {
        contactNewId = i + 1;
      }

      const newContact = {
        id: contactNewId,
        name,
        email,
        phone,
      };

      const updatedContacts = [...parsedData, newContact];

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
      return console.table(updatedContacts);
    })
    .catch((error) => console.log(error));
}

//delete contact
function removeContact(contactId) {
  fs.readFile(contactsPath, "utf8")
    .then((data) => {
      const parsedData = JSON.parse(data);
      const updatedContacts = [];

      parsedData.map((item) => {
        if (item.id !== contactId) {
          updatedContacts.push(item);
          fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
        }
      });
      return console.table(updatedContacts);
    })
    .catch((error) => console.log(error));
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
