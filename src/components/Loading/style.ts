import { keyframes } from "@stitches/react";
import { styled } from "../../ui/stitches.config";

export const Container = styled("div", {
  gridColumn: 'span 3',
  margin: 'auto',
});

const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const LoadingSpinner = styled("div", {
  width: '50px',
  height: '50px',
  border: '6px solid $lightGray',
  borderTop: '6px solid $green',
  borderRadius: '100%',
  animation: `${spinner} 1.5s linear infinite`,
});