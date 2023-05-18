import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tooltip from './tooltip-main';

function TooltipHtml(props) {
    const { TooltipProps } = props;
    const sheet = new ServerStyleSheet();
    const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Tooltip TooltipProps= {TooltipProps}/>));
    const css = sheet.getStyleTags();
    const lines = html.split('>');
    const csslines = css.split(';');
    var indentSize = 2;

    for (let i = 0; i < lines.length-1; i++) {
        if(i>=1 && i < lines.length-2 ){
            lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
        }else{
            lines[i] = lines[i].trim() + '>';
        }
    }

    const formattedHTML = lines.join('\n');
    const formattedCSS = csslines.join('\n');
    console.log(formattedHTML);
    console.log(formattedCSS);
    return (
        <>
            <SyntaxHighlighter language="html" style={coy}>
                {formattedHTML}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="css" style={coy}>
                {formattedCSS}
            </SyntaxHighlighter>
        </>
    )
}

export default TooltipHtml