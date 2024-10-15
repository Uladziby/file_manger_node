import { getList } from "./functions/getList.js";
import { goUpperDirectory } from "./functions/goUpperDirectory.js";

export const commands = {
  ls: async (args) => await getList(args.path),
  up: async (args) => await goUpperDirectory(args),
};
