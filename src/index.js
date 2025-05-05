import { getUserName } from "./getUserName.js";
import { isValidCommand } from "./utils/isValidCommand.js";
import { executeCommand } from "./utils/executeCommand.js";
import os from "os";
import { homedir } from "node:os";
import { chdir, stdin, stdout } from "node:process";

const app = async () => {
  let currentPath = os.homedir();
  const username = await getUserName();

  chdir(homedir());

  stdout.write(`Welcome to the File Manager, ${username}!\n${currentPath} `);
  stdout.write(`You are currently in ${currentPath}> `);

  stdin.on("data", async (data) => {
    if (data.toString().trim() === ".exit") {
      process.exit();
    }

    const command = data.toString().trim().split(" ");

    const argument = {
      args: command.slice(1).join(" "),
      path: currentPath,
    };

    if (isValidCommand(command)) {
      await executeCommand(command[0], argument);

      currentPath = argument.path;
    } else {
      console.error("Invalid command", command[0]);
    }
  });

  process.on("close", () => {
    output.write(`Thank you for using File Manager, ${userName}, bye!\n`);
  });
};

await app();
