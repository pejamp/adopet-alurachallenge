import { styled } from "../../ui/stitches.config";
import IlustrationImage from '../../assets/illustration.png';
import Form2Image from '../../assets/forma-2.png';
import Form2TabletImage from '../../assets/forma-2-tablet.png';

export const ContentInitial = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10.5rem',
  gap: '24px',
  background: `url(${IlustrationImage}) bottom -1rem right 79px / 247px no-repeat, url(${Form2Image}) center right / auto no-repeat, $blue`,

  '@tablet': {
    background: `url(${IlustrationImage}) bottom -2rem center / 338px no-repeat, url(${Form2TabletImage}) center right / auto no-repeat, $blue`,
    paddingTop: '17rem',
    gap: '2.5rem',
  },

  '@desktop': {
    paddingTop: '8rem',
  }
});

export const IconInitial = styled('img', {
  width: '186px',
  height: '46px',

  '@tablet': {
    width: '251px',
    height: '62px',
  },

  '@desktop': {
    width: '260px',
    height: '64px',
  }
});

export const FlexBox = styled('div', {
  display: "flex",
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',

  '@tablet': {
    gap: '24px',
  }
});

export const TitleInitial = styled('h1', {
  fontSize: '26px',
  fontWeight: '500',
  lineHeight: '48px',
  color: '$textWhite',
  fontFamily: '$ibmPlexSans',

  '@tablet': {
    fontSize: '28px',
    fontFamily: '$poppins',
  }
});

export const TextInitial = styled('p', {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  color: '$textWhite',
  textAlign: 'center',
  width: '248px',

  '@tablet': {
    fontSize: '18px',
    lineHeight: '26px',
    width: '344px',
  }
});