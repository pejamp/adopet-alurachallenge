import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: 'border-box', 
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
    fontFamily: 'Poppins, IBM Plex Sans, sans-serif',
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
  "button, a": {
    cursor: 'pointer',
  }
});