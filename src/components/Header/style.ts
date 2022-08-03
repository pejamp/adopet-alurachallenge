import { styled } from "../../ui/stitches.config";
import backgroundImage from '../../assets/forma-1.png';
import backgroundTabletImage from '../../assets/forma-1-tablet.png';

export const ContainerHeader = styled('header', {
  position: "fixed",
  width: '100%',
  padding: '2.5rem 3rem',
  zIndex: '99999',

  '&::before': {
    content: '',
    width: '352px',
    height: '295px',
    position: 'absolute',
    top: '0',
    left: '-1px',
    background: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',

    '@tablet': {
      width: '560px',
      height: '470px',
      background: `url(${backgroundTabletImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto',
    },
  },

  '@tablet': {
    padding: '3.3rem 3rem',
    position: "absolute",
    top: '0',
    left: '0',
    zIndex: '1',
  },

  '@desktop': {
    padding: '2.9rem 10rem',
  }
});

export const ContentHeader = styled('div', {
  display: "flex",
  gap: '3.625rem',
  alignItems: 'center',
});

export const IconHeader = styled('img', {
  transition: 'all 0.25s ease',

  '&:hover': {
    opacity: '0.8',
  }
});

export const LogoHeader = styled('img', {
  display: 'none',

  '@tablet': {
    display: 'inline-block',
    width: '128px',
  }
});

export const UserHeader = styled('img', {
  width: '40px',
  height: '40px',
  border: '1px solid $green',
  objectFit: 'cover',
  borderRadius: '50%',

  '@tablet': {
    width: '48px',
    height: '48px',
  },

  '@desktop': {
    width: '56px',
    height: '56px',
  }
});

export const FlexBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: '9999',
  position: "relative",
});
