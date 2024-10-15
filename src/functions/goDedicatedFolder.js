import { readdir } from "fs/promises";
import path from "path";

export const goDedicatedFolder = async (args) => {
  const resultPath = path.resolve(args.path, args.args);

  try {
    await readdir(resultPath);
    args.path = resultPath;
  } catch {
    console.error("Incorrect path");
  }
};
