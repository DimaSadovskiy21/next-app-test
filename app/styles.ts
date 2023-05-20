'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { slide } from '@/assets/images';

export const MainWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '33px',
  width: '100%',
});

export const ImageWrapper = styled('div')({
  position: 'relative',
  margin: '0 -141px',
  '@media(max-width: 865px)': {
    margin: '0 -70px',
  },
  '@media(max-width: 670px)': {
    margin: '0 -35px',
  },
  '@media(max-width: 495px)': {
    margin: 0,
  },
});

export const ImageStyled = styled(Image)({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '474px',
  '@media(max-width: 670px)': {
    height: '340px',
  },
});
