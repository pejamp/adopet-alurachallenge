import { styled } from "../../ui/stitches.config";
import backgroundTabletImage from '../../assets/forma-1-tablet.png';

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@tablet': {
    background: `url(${backgroundTabletImage}) no-repeat`,
    backgroundPosition: 'top 0 left -1px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  },

  '@desktop': {
  }
});

export const Content = styled('main', {
  flex: '1',

  variants: {
    color: {
      initialScreen: {
        backgroundColor: '$blue',
      }
    }
  }
});