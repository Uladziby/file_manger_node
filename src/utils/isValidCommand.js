import { commands } from "../commands.js";

export const isValidCommand = (command) => Object.hasOwn(commands, command[0]);
