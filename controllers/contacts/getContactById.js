const contactsList = require("./getContactsList");

//get contact by id
const getContactById = async (contactId) => {
  try {
    const contacts = await contactsList();
    const result = contacts.find((item) => item.id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = getContactById;
