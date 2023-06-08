import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from './navbar';

function NavbarHtml(props) {
    const { navValues }=props;
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Navbar navValues={navValues}/>));
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

const [copied, setCopied] = useState(false);

const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedCode)
    .then(() => {
        setCopied(true);
        setTimeout(() => {
        setCopied(false);
        }, 2000);
    })
    .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
    });
};
  console.log(formattedCode);
   console.log(css);
  return (
    <>
      <div className='clipboard-div'>
          <button className='clipboard-btn' aria-label="copy to clipboard button" onClick={copyToClipboard}>
              <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                  {copied ? ' Copied!' : ' Copy Code'}
              </i>
          </button>
      </div>
      <SyntaxHighlighter language="html" style={coy}>
        {formattedCode}
      </SyntaxHighlighter>
    </>
    
  )
}

export default NavbarHtml;