import { styled } from "../../ui/stitches.config";
import Forma3Image from '../../assets/forma-3.png';
import patasImage from '../../assets/patas.png';

export const ContentRegister = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9.75rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  gap: '24px',
  background: `url(${Forma3Image}) bottom 32px left -1px`,
  backgroundRepeat: 'no-repeat',

  '&::after': {
    content: "",
    width: '190px',
    height: '243px',
    background: `url(${patasImage}) top right`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: '0',
    right: '0',
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
