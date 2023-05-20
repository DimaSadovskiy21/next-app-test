import { usePathname } from 'next/navigation';

import { generatePageTitle } from './utils';

const Head = () => {
  const pathname = usePathname();

  const title = generatePageTitle(pathname);
  return (
    <head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
  );
};

export default Head;
