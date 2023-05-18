import { usePathname } from "next/navigation";

import { generatePageTitle } from "./utils";

const Head = () => {
  const pathname = usePathname();

  const title = generatePageTitle(pathname);
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
};

export default Head;
