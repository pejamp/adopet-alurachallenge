import { styled } from "../../ui/stitches.config";
import Form2TabletImage from '../../assets/forma-2-tablet.png';

export const Content = styled('div', {
  height: '100%',
  paddingTop: '10.5rem',

  '@tablet': {
    paddingTop: '17rem',
    background: `url(${Form2TabletImage}) bottom 10rem right / auto no-repeat`,
  },

  '@desktop': {
    paddingTop: '12rem',
    backgroundPosition: 'bottom 6rem right',
  },

  '.form': {
    backgroundColor: '$cardBackground',
    padding: '2rem 1rem',
    margin: '0 1.5rem 1rem',
    borderRadius: '10px',
    display: 'grid',
    gap: '1rem',
    placeItems: 'center',

    '& button': {
      marginTop: '1rem',
    },

    '@tablet': {
      margin: '0 auto',
      width: '524px',
      marginBottom: '5.6rem',
    },

    '@desktop': {
      width: '552px',
      marginBottom: '2.25rem',
      padding: '2rem 1.875rem',
    }
  }
});

export const TextContact = styled('h1', {
  fontSize: '1rem',
  lineHeight: '20px',
  textAlign: 'center',
  color: '$textBlue',
  width: '226px',
  margin: '0 auto 1.5rem',

  '@tablet': {
    width: '524px',
    fontSize: '18px',
    lineHeight: '26px',
    marginBottom: '2.5rem',
  },

  '@desktop': {
    width: '492px',
  }
});