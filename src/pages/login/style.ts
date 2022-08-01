import { styled } from "../../ui/stitches.config";
import Forma3Image from '../../assets/forma-3.png';
import Forma2TabletImage from '../../assets/forma-2-tablet.png';
import PatasImage from '../../assets/patas.png';
import PatasTabletImage from '../../assets/patas-tablet.png';
import PatasDesktopImage from '../../assets/patas-desktop.png';

export const ContentLogin = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9.75rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  background: `url(${Forma3Image}) bottom 2rem left -1px`,
  backgroundRepeat: 'no-repeat',

  '@tablet': {
    background: `url(${Forma2TabletImage}) bottom 10.25rem right / auto no-repeat`,
  },

  '@desktop': {
    backgroundPosition: 'bottom 6.25rem right',
  },

  '&::after': {
    content: "",
    width: '190px',
    height: '243px',
    background: `url(${PatasImage}) top right`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '0',
    right: '0',

    '@tablet': {
      width: '292px',
      height: '374px',
      background: `url(${PatasTabletImage}) top right / auto no-repeat`,
      zIndex: '9999',
    },
  
    '@desktop': {
      background: `url(${PatasDesktopImage}) top right / auto no-repeat`,
    },
  },


  '.form': {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    
    '& button': {
      marginTop: '24px',
    }
  },
});

export const IconLogin = styled('img', {
  width: '142px',
  height: '34px',
  objectFit: 'contain',
});

export const TextLogin = styled('p', {
  lineHeight: '21px',
  textAlign: 'center',
  color: '$textBlue',
  marginTop: '3.5rem',
  marginBottom: '2.625rem',

  '& + p': {
    marginTop: '8px',
  }
});

export const LinkLogin = styled('a', {
  fontSize: '12px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '$coral',
  textDecorationLine: 'underline',
  marginTop: '8px',
});

export const Space = styled('div', {
  display: 'grid',
  gap: '24px',
  width: '100%',
});