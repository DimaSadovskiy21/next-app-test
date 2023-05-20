'use client';
import styled from 'styled-components';

export const IconLayoutWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  maxWidth: '221px',
  padding: '28px 52px 0 71px',
  backgroundColor: 'var(--light-gray)',
  '@media(max-width: 1000px)': {
    padding: '20px 26px 0 41px',
  },
  '@media(max-width: 635px)': {
    display: 'none',
  },
});

export const BackgroundIcon = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '98px',
  height: '98px',
  borderRadius: '50%',
  backgroundColor: 'var(--dark-gray)',
  '@media(max-width: 1000px)': {
    width: '80px',
    height: '80px',
  },
});

export const Title = styled('p')({
  whiteSpace: 'nowrap',
});
