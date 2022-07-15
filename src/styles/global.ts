import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'HelveticaNeue',
      src: 'local("HelveticaNeue"), url("fonts/HelveticaNeue.ttc")',
    },
    {
      fontFamily: 'Bell MT',
      src: 'local("Bell MT"), url("fonts/BELLB.TTF")',
    },
  ],
  "*": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: 'border-box', 
    fontFamily: 'HelveticaNeue, Arial, sans-serif',
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block",
  },
  "*[hidden]": {
    display: "none",
  },
  body: {
    lineHeight: "1",
    backgroundColor: '$background',
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
  },
  table: {
    borderSpacing: "0",
  },
});