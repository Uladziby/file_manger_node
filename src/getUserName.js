const prefix = "--username=";

export const getUserName = () => {
  const username = process.argv
    .slice(2)
    .filter((param) => param.startsWith(prefix))
    .toString()
    .substring(prefix.length);

  return username ?? "Incognito";
};
