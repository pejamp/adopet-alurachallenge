import { styled } from "../../ui/stitches.config";
import backgroundImage from '../../assets/forma-1.png';

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  background: `url(${backgroundImage})`,
  backgroundPosition: 'top 0 left 0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
});

export const Content = styled('main', {
  padding: '0 1.5rem',
});