const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

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

module.exports = addContact;
