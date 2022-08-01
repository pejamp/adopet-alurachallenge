import { styled } from "../../ui/stitches.config";
import backgroundTabletImage from '../../assets/forma-1-tablet.png';

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const Content = styled('main', {
  flex: '1',
});