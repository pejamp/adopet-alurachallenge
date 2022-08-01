import { styled } from "../../ui/stitches.config";
import Form3Image from '../../assets/forma-3.png';
import Form2TabletImage from '../../assets/forma-2-tablet.png';
import PatasImage from '../../assets/patas.png';
import PatasTabletImage from '../../assets/patas-tablet.png';
import PatasDesktopImage from '../../assets/patas-desktop.png';

export const ContentRegister = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9.75rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  gap: '24px',
  background: `url(${Form3Image}) bottom 2rem left -1px`,
  backgroundRepeat: 'no-repeat',

  '@tablet': {
    background: `url(${Form2TabletImage}) bottom 10.25rem right / auto no-repeat`,
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
    }
  },

  '.form': {
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px',

    '& button': {
      marginTop: '4px',
    }
  }
});

export const IconRegister = styled('img', {
  width: '142px',
  height: '34px',
  objectFit: 'contain',
});

export const TextRegister = styled('p', {
  lineHeight: '21px',
  textAlign: 'center',
  color: '$textBlue',

  '& + p': {
    marginTop: '8px',
  }
});

export const TextBox = styled('div', {
  width: '312px',
});
