import { styled } from "../../ui/stitches.config";
import CameraIcon from '../../assets/icons/photo-camera.png';

export const ContainerInput = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  zIndex: '9999',

  '.error': {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: '12px',
    color: '$error',
  },
});

export const Label = styled('label', {
  lineHeight: '24px',
  color: '$textBlue',
  fontWeight: '600',
});

export const InputBox = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
});

export const CustomInput = styled('input', {
  display: 'none',
});

export const ImageBox = styled('div', {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '$background',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  '&::after': {
    content: '',
    position: "absolute",
    top: '0',
    left: '0',
    opacity: '0',
    width: '100%',
    height: '100%',
    background: `url(${CameraIcon}) center / 32px no-repeat`,
    transition: 'all 0.25s ease',
  },
  
  '&:hover': {
    '&::after': {
      opacity: '1',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    
    border: '3px solid $green',
  }
});

export const CustomImg = styled('img', {
  width: '100%',
  height: '100%',
  position: "absolute",
  objectFit: 'cover',
});

export const SignText = styled('span', {
  fontSize: '12px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '$coral',
});