import { styled } from "../../ui/stitches.config";
import backgroundImage from '../../assets/forma-1.png';

export const ContainerHeader = styled('header', {
  background: `url(${backgroundImage})`,
  backgroundPosition: 'top 0 left -1px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  position: "fixed",
  width: '100%',
  height: '295px',
  padding: '3rem',
});

export const ContentHeader = styled('div', {
  display: "flex",
  gap: '3.625rem',
  alignItems: 'center',
});

export const IconHeader = styled('img', {
});

export const UserHeader = styled('img', {
  width: '40px',
  height: '40px',
  border: '1px solid $green',
  objectFit: 'cover',
  borderRadius: '50%',
});

export const FlexBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
