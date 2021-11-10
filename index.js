const contactsFn = require("./conatcts");

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

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsFn.listContacts();
      break;

    case "get":
      contactsFn.getContactById(Number(id));
      break;

    case "add":
      contactsFn.addContact(name, email, phone);
      break;

    case "remove":
      contactsFn.removeContact(Number(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
