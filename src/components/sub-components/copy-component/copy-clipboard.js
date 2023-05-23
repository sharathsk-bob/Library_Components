import React, { useState } from "react";

export default function CopyClipboard(props) {
    
    //console.log(props, "props dekhne hai na>>>>>>>>");
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(props)
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

    return (
        <div className='clipboard-div'>
            <button className='clipboard-btn' onClick={copyToClipboard}>
                <i className={`fa ${copied ? 'fa-check' : 'fa-copy'}`} >
                    {copied ? ' Copied!' : ' Copy Code'}
                </i>
            </button>
        </div>
    )
}
