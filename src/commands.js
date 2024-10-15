import { getList } from "./functions/getList.js";
import { goUpperDirectory } from "./functions/goUpperDirectory.js";
import { goDedicatedFolder } from "./functions/goDedicatedFolder.js";

export const commands = {
  ls: async (args) => await getList(args.path),
  up: async (args) => await goUpperDirectory(args),
  cd: async (args) => await goDedicatedFolder(args),
};
