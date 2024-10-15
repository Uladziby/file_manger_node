import { dirname } from "path";

export const goUpperDirectory = async (args) => {
  const path = args.path.split("\\");
  path.pop();

  args.path = path.join("\\");
};
