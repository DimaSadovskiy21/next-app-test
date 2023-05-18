export const generatePageTitle = (pathname: string) => {
  const title = pathname.substring(1);

  return title ? title : "home";
};
