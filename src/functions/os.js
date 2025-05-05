import { osCommands } from "../osCommands.js";

const PREFIX = "--";

export const os = async (arg) => {
  console.log(arg, "arg");
  if (arg.startsWith(PREFIX)) {
    const argument = arg.substring(PREFIX.length);
    console.log(argument, "argument");
    const value = await Object.getOwnPropertyDescriptor(osCommands, argument)
      .value;
    console.dir(value, "value");
  } else {
    console.error("Invalid argument");
  }
};
