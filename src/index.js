import { stdout, stdin } from "process";
import { getUserName } from "./getUserName.js";
import { isValidCommand } from "./utils/isValidCommand.js";
import { executeCommand } from "./utils/executeCommand.js";
import os from "os";

const app = async () => {
  const username = await getUserName();
  let currentPath = os.homedir();

  stdout.write(`Welcome to the File Manager, ${username}!\n${currentPath} `);

  stdin.on("data", async (data) => {
    if (data.toString().trim() === "end") {
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
      console.error("Invalid command");
    }

    stdout.write(`You are currently in ${currentPath}> `);
  });

  process.on("exit", () =>
    stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
  );
};

app();
