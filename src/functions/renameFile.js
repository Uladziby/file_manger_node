import { rename as fsRename } from "fs/promises";
import path from "node:path";

export const renameFile = async (args) => {
  const paths = args.args.split(" ");
  const oldPath = path.resolve(args.path, paths[0]);
  const newPath = path.resolve(args.path, paths[1]);

  console.dir(args);

  try {
    await fsRename(oldPath, newPath);
    console.dir("The file was renamed");
  } catch {
    throw new Error("FS operation failed");
  }
};
