import { styled } from "../../ui/stitches.config";
import UserImage from '../../assets/usuario.png';

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
  //display: 'none',
});

export const ImageBox = styled('div', {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '$background',
  position: 'relative',
  overflow: 'hidden',
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