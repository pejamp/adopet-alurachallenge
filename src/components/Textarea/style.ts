import { styled } from "../../ui/stitches.config";

export const ContainerTextarea = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  zIndex: '9999',

  '.error': {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: '12px',
    color: '$error',
  },

  variants: {
    secondStyle: {
      true: {
        alignItems: 'flex-start',
        gap: '1rem',
      }
    }
  }
});

export const Label = styled('label', {
  lineHeight: '24px',
  color: '$gray',

  variants: {
    secondStyle: {
      true: {
        fontWeight: '600',
        color: '$textBlue',
      }
    }
  }
});

export const TextareaBox = styled('div', {
  width: '100%',
  height: '172px',
  borderRadius: '6px',
  backgroundColor: '$offWhite',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  padding: '1rem',
  display: 'flex',

  variants: {
    secondStyle: {
      true: {
        backgroundColor: '$background',
      }
    }
  }
});

export const CustomTextarea = styled('textarea', {
  textAlign: 'center',
  outline: 'none',
  background: 'transparent',
  flex: '1',
  resize: 'none',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$textGray',

  '&::placeholder': {
    fontFamily: '$poppins',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    color: '$lightGray',
  },

  variants: {
    secondStyle: {
      true: {
        textAlign: 'left',

        '&::placeholder': {
          fontSize: '14px',
          lineHeight: '24px',
          textAlign: 'left',
          color: '$lightGray',
        },
      }
    }
  }
});