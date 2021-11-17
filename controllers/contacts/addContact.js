const contactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

//add new contact
const addContact = async (name, email, phone) => {
  try {
    const contacts = await contactsList();
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

    contacts.push(newContact);

    await updateContacts(contacts);

    return contacts;
  } catch (error) {
    return error;
  }
};

module.exports = addContact;
