import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { useEffect,useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ToasterMain from './toaster-main';

function ToasterHtml(props) {
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<ToasterMain {...props}/>));
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
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };

  return (
    <div>
      <button onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      <SyntaxHighlighter language="html" style={coy}>
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
}

export default ToasterHtml;
