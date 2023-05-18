import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CustomButton } from './CustomButton';
import Button from './button-main';

function ButtonHtml(props) {
    const { ButtonProps } = props;
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Button ButtonProps = {ButtonProps}/>));
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
        <>
            <SyntaxHighlighter language="html" style={coy}>
                {formattedCode}
            </SyntaxHighlighter>
            {/* <SyntaxHighlighter language="css" style={coy}>
                {css}
            </SyntaxHighlighter> */}
        </>
    )
}

export default ButtonHtml