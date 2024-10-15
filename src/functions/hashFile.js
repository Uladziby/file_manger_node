import path from "node:path";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

export const hashFile = async (args) => {
  const pathToFile = path.resolve(args.path, args.args);

  try {
    const data = await readFile(pathToFile);

    const hashedData = createHash("sha256").update(data).digest("hex");

    console.log("The hash is :", hashedData);
  } catch {
    throw new Error("FS operation failed");
  }
};
