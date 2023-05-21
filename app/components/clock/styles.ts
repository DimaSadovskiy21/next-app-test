'use client';
import styled from 'styled-components';

export const ClockWrapper = styled('div')({
  display: 'flex',
  gap: '5px',
  margin: '0 46%',
  whiteSpace: 'nowrap',
  "@media screen and (max-width: 1000px)": {
    margin: '0 auto',
  },
});
