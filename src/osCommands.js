import os from "os";

export const osCommands = {
  EOL: os.EOL,
  cpus: os.cpus(),
  homedir: os.homedir(),
  username: os.userInfo().username,
  architecture: os.arch(),
};
