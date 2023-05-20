'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const SelectWrapper = styled('div')({
  position: 'relative',
});

export const CustomSelect = styled('select')({
  minWidth: '439px',
  padding: '7px 12px',
  border: 'none',
  borderRadius: '5px',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  outline: 'none',
  appearance: 'none',
  "@media(max-width: 1140px)": {
    minWidth: "300px",
  },
  "@media(max-width: 1000px)": {
    minWidth: "250px",
  },
  "@media(max-width: 425px)": {
    minWidth: "200px",
  }
});

export const Arrow = styled(Image)({
  position: 'absolute',
  top: 10,
  right: 10,
  pointerEvents: 'none',
});
