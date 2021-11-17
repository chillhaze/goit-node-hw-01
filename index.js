const contactsFn = require("./controllers/contacts/index");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsFn.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsFn.getContactById(Number(id));
      if (!contact) {
        throw new Error(`Contact with id:${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const updatedContacts = await contactsFn.addContact(name, email, phone);
      console.table(updatedContacts);
      break;

    case "update":
      const updateContact = await contactsFn.updateContactById(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Contact with id:${id} not found`);
      }
      console.log(updateContact);
      break;

    case "remove":
      const modifiedContacts = await contactsFn.removeContact(Number(id));
      console.table(modifiedContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

(async () => {
  await invokeAction(argv);
})();
