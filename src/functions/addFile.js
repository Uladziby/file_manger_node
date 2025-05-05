import path from "node:path";
import { writeFile, access } from "fs/promises";

export const addFile = async (args) => {
  const filePath = path.resolve(args.path, args.args);
  const erMess = "FS operation failed";

  try {
  } catch (err) {
    console.error(erMess);
  }

  await access(args.path).then(() => {
    console.dir("The file was created");

    writeFile(filePath, "", { flag: "wx" });
  }),
    () => {
      throw new Error(erMess);
    };
};
