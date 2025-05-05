import { access } from "fs/promises";

export const copyFile = async (args) => {
  const [pathToDist, pathToCopy] = args.args.split(" ");

  const filePath = path.resolve(args.path, pathToDist);

  const newFilePath = path.join(
    path.resolve(args.path, pathToCopy),
    path.basename(filePath)
  );

  try {
    await access(pathToCopy);

    await writeFile(pathToCopy, "");

    const readableStream = createReadStream(filePath);

    const writeStream = createWriteStream(newFilePath);

    readableStream.on("data", async (chunk) => writeStream.write(chunk));

    console.dir("Еhe file was copied");
  } catch {
    throw new Error("FS operation failed");
  }
};
