import { styled } from "../../ui/stitches.config";

export const Container = styled('div', {
  width: '100%',
  borderRadius: '6px',
  backgroundColor: '$coral', 
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem',
  margin: '0.5rem 0',
});

export const CustomImage = styled('div', {
  '& svg': {
    fill: '$background',
  }
});

export const WarnText = styled('span', {
  fontSize: '14px',
  color: '$textWhite',
});