const listContacts = require("./getContactsList");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContactById = require("./updateContactById");
const updateContacts = require("./updateContacts");
const removeContact = require("./removeContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  updateContacts,
  removeContact,
};
