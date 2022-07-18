import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'Poppins',
      src: 'local("Poppins"), url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap")',
    },
    {
      fontFamily: 'IBM Plex Sans',
      src: 'local("IBM Plex Sans"), url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap")',
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
    fontFamily: 'Poppins, IBM Plex Sans, sans-serif',
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
    fontSize: "16px",
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