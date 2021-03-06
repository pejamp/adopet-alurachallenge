import { styled } from "../../ui/stitches.config";
import IlustrationImage from '../../assets/illustration.png'
import form2Image from '../../assets/forma-2.png'

export const ContentInitial = styled('div', {
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '10.5rem',
  gap: '24px',
  background: `url(${IlustrationImage}) bottom -1rem right 79px / 247px no-repeat, url(${form2Image}) center right / auto no-repeat`,
});

export const IconInitial = styled('img', {
  width: '186px',
  height: '46px',
});

export const FlexBox = styled('div', {
  display: "flex",
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
});

export const TitleInitial = styled('h1', {
  fontSize: '26px',
  fontWeight: '500',
  lineHeight: '48px',
  color: '$textWhite',
  fontFamily: '$ibmPlexSans',
});

export const TextInitial = styled('p', {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  color: '$textWhite',
  textAlign: 'center',
  width: '248px',
});