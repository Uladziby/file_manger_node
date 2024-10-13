import { fileURLToPath } from "url";
import { stdout, stdin } from "process";
import { getUserName } from "./getUserName.js";
import { dirname } from "path";

const app = async () => {
  const username = await getUserName();

  stdout.write(
    `Welcome to the File Manager, ${username}!\n${dirname(
      fileURLToPath(import.meta.url)
    )} `
  );

  stdin.on("data", (data) => {
    console.dir("data");
    if (data.toString().trim() === "end") {
      process.exit();
    }
    stdout.write(`${dirname(fileURLToPath(import.meta.url))} `);
  });

  process.on("exit", () =>
    stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
  );
};

app();
