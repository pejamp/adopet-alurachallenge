import { styled } from "../../ui/stitches.config";
import Forma3Image from '../../assets/forma-3.png';
import patasImage from '../../assets/patas.png';
import { Input } from "../../components/Input";

export const ContentLogin = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '9.75rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
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