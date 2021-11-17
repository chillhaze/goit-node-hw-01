const contactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

//delete contact
const removeContact = async (contactId) => {
  try {
    const contacts = await contactsList();
    const updatedContacts = [];

    contacts.map((item) => {
      if (item.id !== contactId) {
        updatedContacts.push(item);

        updateContacts(updatedContacts);
      }
    });
    return updatedContacts;
  } catch (error) {
    return error;
  }
};

module.exports = removeContact;
