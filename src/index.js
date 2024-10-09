import { fileURLToPath } from "url";
import { stdout } from "process";
import { getUserName } from "./getUserName.js";
import { dirname } from "path";

const app = async () => {
  const username = await getUserName();

  stdout.write(
    `Welcome to the File Manager, ${username}!\n${dirname(
      fileURLToPath(import.meta.url)
    )} `
  );
};

app();
