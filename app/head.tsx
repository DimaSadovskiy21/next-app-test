import { usePathname } from "next/navigation";

import { generatePageTitle } from "./utils";

const Head = () => {
  const pathname = usePathname();

  const title = generatePageTitle(pathname);
  return (
    <head>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </head>
  );
};

export default Head;
