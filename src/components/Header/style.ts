import { styled } from "../../ui/stitches.config";
import backgroundImage from '../../assets/forma-1.png';
import backgroundTabletImage from '../../assets/forma-1-tablet.png';

export const ContainerHeader = styled('header', {
  background: `url(${backgroundImage})`,
  backgroundPosition: 'top 0 left -1px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  position: "fixed",
  width: '100%',
  height: '295px',
  padding: '2.5rem 3rem',

  '@tablet': {
    height: 'auto',
    background: 'none',
    padding: '3.3rem 3rem',
    position: "absolute",
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
});
