import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CustomStyleTooltip } from './tooltip';
import Tooltip from './tooltip-main';
import CopyClipboard from '../copy-component/copy-clipboard';

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

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedHTML)
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

    console.log(formattedHTML);
    console.log(CustomStyleTooltip.componentStyle.rules[0]);
    return (
        <>
            <div className='clipboard-div'>
                <button className='clipboard-btn' onClick={copyToClipboard}>
                    <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                        {copied ? ' Copied!' : ' Copy Code'}
                    </i>
                </button>
            </div>

            {/* <CopyClipboard {...formattedHTML}/> */}

            <SyntaxHighlighter language="html" style={coy}>
                {formattedHTML}
            </SyntaxHighlighter>
            {/* <SyntaxHighlighter language="css" style={coy}>
                {formattedCSS}
            </SyntaxHighlighter> */}
        </>
    )
}

export default TooltipHtml