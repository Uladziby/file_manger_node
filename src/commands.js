import { getList } from "./functions/getList.js";

export const commands = {
  ls: async (args) => await getList(args.path),
};
