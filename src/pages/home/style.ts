import { styled } from "../../ui/stitches.config";

export const ContentHome = styled('div', {
  height: '100%',
  paddingTop: '9.75rem',

  '@tablet': {
    paddingTop: '18rem',
  },

  '@desktop': {
    paddingTop: '12.75rem',
  }
});

export const CardList = styled('div', {
  display: 'grid',
  gap: '1rem',

  '@tablet': {
    gridTemplateColumns: '1fr 1fr',
    padding: '0 2rem 2rem',
  },

  '@desktop': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    padding: '0',
    maxWidth: '1120px',
    margin: 'auto',
    paddingBottom: '3.75rem',
  }
});

export const TextHome = styled('h1', {
  lineHeight: '20px',
  textAlign: 'center',
  color: '$textBlue',
  width: '226px',
  margin: '0 auto 2rem',

  '@tablet': {
    width: '373px',
    fontSize: '18px',
  },

  '@desktop': {
    width: '100%',
    marginBottom: '2.5rem',
  }
});