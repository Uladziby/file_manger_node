import { rm } from "fs/promises";
import path from "node:path";

export const removeFile = async (args) => {
  const pathToFile = path.resolve(args.path, args.args);

  try {
    await rm(pathToFile);
    console.dir("The file was removed");
  } catch {
    throw new Error("FS operation failed");
  }
};
