const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("db/contacts.json");

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

module.exports = getContactById;
