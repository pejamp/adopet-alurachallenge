import { styled } from "../../ui/stitches.config";

export const ButtonBox = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$coral',
  width: '148px',
  height: '40px',
  borderRadius: '6px',
  fontWeight: '600',
  color: '$textWhite',
  transition: 'all 0.25s ease',

  '&:hover': {
    backgroundColor: '$buttonHover',
  }
});

export const LinkBox = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '180px',
  height: '40px',
  backgroundColor: '$coral',
  borderRadius: '6px',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
  fontWeight: '600',
  color: '$textWhite',
  transition: 'all 0.25s ease',

  '&:hover': {
    backgroundColor: '$buttonHover',
  }
});