import React from 'react';
import FooterComponent from '../../footer';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

function FooterHtml(props) {
    const { footerProps }=props;
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<FooterComponent {...footerProps}/>));
    const css = sheet.getStyleTags();
    const lines = html.split('>');
    var indentSize = 2;

    for (let i = 0; i < lines.length-1; i++) {
      if(i>=1 && i < lines.length-2 ){
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      }else{
        lines[i] = lines[i].trim() + '>';
      }
    }

const formattedCode = lines.join('\n');
  console.log(formattedCode);
   console.log(css);
  return (
    <SyntaxHighlighter language="html" style={coy}>
    {formattedCode}
  </SyntaxHighlighter>
  )
}

export default FooterHtml