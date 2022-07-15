import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      blue: '#3772FF',
      green: '#36D6AD',
      coral: '#FC7071',
      cream: '#FCF0E3',
      gray: '#737380',
      lightGray: '#BCBCBC',
      Background: '#F6F6F6',
    },
  },
  media: {
    tablet: '(min-width: 560px)', 
    desktop: '(min-width: 1024px)', 
  }
});