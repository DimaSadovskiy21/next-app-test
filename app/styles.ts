'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { slide } from '@/app/assets/images';

export const MainWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '33px',
  width: '100%',
});

export const ImageWrapper = styled('div')({
  position: 'relative',
  margin: '0 -141px',
  '@media screen and (max-width: 880px)': {
    margin: '0 -70px',
  },
  '@media screen and (max-width: 720px)': {
    margin: '0 -35px',
  },
  '@media screen and (max-width: 495px)': {
    margin: 0,
  },
});

export const ImageStyled = styled(Image)({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '474px',
  '@media screen and (max-width: 720px)': {
    height: '340px',
  },
});
