import { styled } from "../../ui/stitches.config";

export const ContainerInput = styled('div', {
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
        gap: '0.5rem',
      }
    }
  },

  '@tablet': {
    gap: '0.5rem',
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
  },

  '@tablet': {
    fontSize: '18px',
  },

  '@desktop': {
    fontWeight: '600',
  }
});

export const InputBox = styled('div', {
  width: '100%',
  height: '40px',
  borderRadius: '6px',
  backgroundColor: '$offWhite',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  variants: {
    secondStyle: {
      true: {
        height: '48px',
        backgroundColor: '$background',
      }
    }
  }
});

export const CustomInput = styled('input', {
  textAlign: 'center',
  outline: 'none',
  background: 'transparent',
  flex: '1',
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

    '@tablet': {
      fontSize: '14px',
    }
  },

  variants: {
    secondStyle: {
      true: {
        textAlign: 'left',
        paddingLeft: '1rem',

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

export const HideButton = styled('button', {
  margin: '0 !important',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  position: "absolute",
  right: '0',
});

export const HideIcon= styled('img', {
  display: "inline-block",
  paddingRight: '12px',
  height: '100%',
});