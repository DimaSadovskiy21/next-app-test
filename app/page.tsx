'use client';
import { Title } from '@/app/components';
import { slide } from '@/app/assets/images';

import { ImageStyled, ImageWrapper, MainWrapper } from './styles';

const Main = () => (
  <MainWrapper>
    <Title>Main page</Title>
    <ImageWrapper>
      <ImageStyled src={slide} alt="background" />
    </ImageWrapper>
  </MainWrapper>
);

export default Main;
