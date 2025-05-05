import { commands } from "../commands.js";

export const executeCommand = async (command, argument) => {
  const commandFunction = commands[command];
  if (commandFunction) {
    await commandFunction(argument);
  }
};
