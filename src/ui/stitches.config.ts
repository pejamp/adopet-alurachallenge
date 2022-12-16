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
      offWhite: '#F6F6F6',
      background: '#FFFFFF',

      cardBackground: '#F6F6F6',

      textWhite: '#FFFFFF',
      textBlue: '#3772FF',
      textGray: '#737380',

      error: '#FF0000',
      
      buttonHover: '#FF9D9E',
    },
    fonts: {
      poppins: 'Poppins',
      ibmPlexSans: 'IBM Plex Sans',
    },
  },
  media: {
    tablet: '(min-width: 560px)', 
    desktop: '(min-width: 1200px)', 
  }
});