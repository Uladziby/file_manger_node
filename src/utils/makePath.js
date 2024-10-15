import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const makePath = (path, ...args) => {
  const dir = dirname(fileURLToPath(path));
  const pathTo = join(dir, ...args);
  return pathTo;
};
