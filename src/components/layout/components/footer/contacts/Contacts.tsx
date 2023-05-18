import Image from "next/image";

import { telegram, vk, youtube } from "assets/vectors";

import { ContactsWrapper, Links, Title } from "./styles";

const Contacts = () => {
  return (
    <ContactsWrapper>
      <Title>Contact us:</Title>
      <Links>
        <a href="https://web.telegram.org/k/">
          <Image src={telegram} alt="telegram" />
        </a>
        <a href="https://vk.com/">
          <Image src={vk} alt="vk" />
        </a>
        <a href="https://www.youtube.com/">
          <Image src={youtube} alt="youtube" />
        </a>
      </Links>
    </ContactsWrapper>
  );
};

export default Contacts;
