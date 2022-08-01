import { styled } from "../../ui/stitches.config";
import MessageIcon from '../../assets/icons/icone-mensagem.svg'

export const CardContainer = styled('article', {
  width: '100%',
  height: '196px',
  backgroundColor: '$cardBackground',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  zIndex: '9999',
});

export const CardImage = styled('img', {
  width: '148px',
  height: '148px',
});

export const CardInfo = styled('div', {
  
});

export const CardTitle = styled('h2', {
  fontWeight: '600',
  lineHeight: '20px',
  color: '$textBlue',
  marginBottom: '0.5rem',
});

export const CardText = styled('span', {
  display: 'block',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textGray',

  variants: {
    space: {
      bottom30: {
        marginBottom: '30px',
      }
    },
    size: {
      small: {
        fontSize: '12px',
        lineHeight: '16px',
      }
    }
  }
});

export const CardLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  lineHeight: '16px',
  color: '$textGray',
  textDecorationLine: 'none',
  paddingTop: '0.5rem',
  gap: '0.5rem',

  '&::before': {
    content: '',
    width: '18px',
    height: '18px',
    background: `url(${MessageIcon})`,
    backgroundRepeat: 'no-repeat',
  }
});
