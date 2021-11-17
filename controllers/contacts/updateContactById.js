const contactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, name, email, phone) => {
  try {
    const contacts = await contactsList();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }
    contacts[idx] = { id, name, email, phone };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (error) {
    return error;
  }
};
module.exports = updateContactById;
