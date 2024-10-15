import { getList } from "./functions/getList.js";
import { goUpperDirectory } from "./functions/goUpperDirectory.js";
import { goDedicatedFolder } from "./functions/goDedicatedFolder.js";
import { addFile } from "./functions/addFile.js";
import { removeFile } from "./functions/removeFile.js";
import { renameFile } from "./functions/renameFile.js";

export const commands = {
  ls: async (args) => await getList(args.path),
  up: async (args) => await goUpperDirectory(args),
  cd: async (args) => await goDedicatedFolder(args),
  add: async (args) => await addFile(args),
  rm: async (args) => await removeFile(args),
  rn: async (args) => await renameFile(args),
};
