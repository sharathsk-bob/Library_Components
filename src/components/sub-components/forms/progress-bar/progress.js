import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import "./progress.scss";
import { Link } from 'react-router-dom';
import useModal from '../../use-modal/use-modal';
import ProgressEditForm from './edit-progress-form';
import ProgressMain from './progress-main';
import ProgressHtml from './progress-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from "styled-components";

export const CustomStyleProgress = styled.div`
.Light{
  // --bs-progress-bar-bg:#f1f4f8 !important;    
}
.percentage-display{
 font-size: 18px;
}
.progress-lable{
 font-size: 20px;
}
.dark{
   --bs-progress-bar-bg:black !important;
}
.cg1blue{
   --bs-progress-bar-bg: var(--color-capgemini-blue) !important;
   background-color: #e9ecef !important;
}
.cg2purple{
   --bs-progress-bar-bg:#2b0a3d !important;
   background-color: #e9ecef !important;
}
.progressbar-output{
 margin-top: 20px;
}
.progress-fullwidth{
   width: 100% !important;
}
.progress-threefourthwidth{
   width: 75% !important;
}
.progress-halfwidth{
   width: 50% !important;
}
.progress-quaterwidth{
   width: 25% !important;
}
.progress{
   --bs-progress-height: 2rem !important;
   border: 2px solid black;
}
.demo-preview {
   padding-top: 100px;
   padding-bottom: 10px;
   margin: auto;
   width:50%;
   text-align: center;
 }
 $brand-default: #B0BEC5;
 $brand-primary: #2196F3;
 $brand-secondary: #323a45;
 $brand-success: #64DD17;
 $brand-warning: #FFD600;
 $brand-info:  #29B6F6;
 $brand-danger: #ef1c1c;
 $bg-light-gray: #f5f5f5;
 .progress {
   background-color: $bg-light-gray;
   border-radius: 3px;
   box-shadow:none;
   &.progress-xs {
     height: 5px;
     margin-top: 5px;
   }
   &.progress-sm {
     height: 10px;
     margin-top: 5px;
   }
   &.progress-lg {
     height: 25px;
   }
   &.vertical {
     position: relative;
     width: 20px;
     height: 200px;
     display: inline-block;
     margin-right: 10px;
     > .progress-bar {
       width: 100%!important;
       position: absolute;
       bottom: 0;
     }
     &.progress-xs {
       width: 5px;
       margin-top: 5px;
     }
     &.progress-sm {
       width: 10px;
       margin-top: 5px;
     }
     &.progress-lg {
       width: 30px;
     }
   }
 }
 
 .progress-bar {
   //background-color: $brand-primary;
   box-shadow:none;
   &.text-left{
     text-align: left;
     span{
       margin-left: 10px;
     }
   }
   &.text-right{
     text-align: right;
     span{
       margin-right: 10px;
     }
   }
 }
 @mixin gradient-striped($color: rgba(255,255,255,.15), $angle: 45deg) {
   background-image: -webkit-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
   background-image: -o-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
   background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
 }
 
 @-webkit-keyframes progress-bar-stripes {
   from  { background-position: 40px 0; }
   to    { background-position: 0 0; }
 }
 
 // Spec and IE10+
 @keyframes progress-bar-stripes {
   from  { background-position: 40px 0; }
   to    { background-position: 0 0; }
 }
 
 @mixin animation($animation) {
   -webkit-animation: $animation;
        -o-animation: $animation;
           animation: $animation;
 }
 .progress.active .progress-bar,
 .progress-bar.active {
   @include animation(progress-bar-stripes 2s linear infinite);
 }
 .progress-striped .progress-bar,
 .progress-bar-striped {
   @include gradient-striped;
   background-size: 40px 40px;
 }
 @mixin progress-bar-variant($color) {
   background-color: $color;
 }
 
 .progress-bar-secondary {
   @include progress-bar-variant($brand-secondary);
 }
 
 .progress-bar-default {
    @include progress-bar-variant($brand-default);
 }
 
 
 .progress-bar-success {
    @include progress-bar-variant($brand-success);
 }
 
 .progress-bar-info {
    @include progress-bar-variant($brand-info);
 }
 
 .progress-bar-warning {
    @include progress-bar-variant($brand-warning);
 }
 
 .progress-bar-danger {
    @include progress-bar-variant($brand-danger);
 }
 
`;
function ProgressBar() {
    const location = useLocation();
    const props = location.state.progressProps;
    const [activeTab, setActiveTab] = useState(1);
    const { open: openEditProgress, close: closeEditProgress, ModalWrapper: ModalWrapperEditProgress } = useModal();
    const [copied, setCopied] = useState(false);
    const formattedCSS = CustomStyleProgress.componentStyle.rules[0];

  // const copyToClipboard = () => {
  //     navigator.clipboard.writeText(formattedCSS)
  //     .then(() => {
  //         setCopied(true);
  //         setTimeout(() => {
  //         setCopied(false);
  //         }, 2000);
  //     })
  //     .catch((error) => {
  //         console.error('Failed to copy to clipboard:', error);
  //     });
  // };
    
    
  return (
    <>
    <ModalWrapperEditProgress>
      <ProgressEditForm close={closeEditProgress} data={props}/>
    </ModalWrapperEditProgress>
    <div className="component-toaster">
            <div className="toaster-left">
              <h1>Progress Bar</h1>
              <span> Component</span>
            </div>
            <div className="toaster-right">
              <div className="button-section">
                {/* <div  className="buttons"> */}
                <Link
                  to="/formcomponents"
                  // state={headerData}
                  className="link-button"
                >
                  Back
                </Link>
                {/* </div> */}

                {/* <button className="backToHome" onClick={()=>{history("/")}}>Back</button> */}
                <button class="buttons" onClick={openEditProgress}>Edit</button>
              </div>
            </div>
          </div>
    <ProgressMain props={props}/>
    <div className="card-tabs">
  <button
    className={activeTab === 1 ? "active" : ""}
    aria-label="HTML Page of Progress Bar Component"
    onClick={() => setActiveTab(1)}
  >
    HTML
  </button>
  <button
    className={activeTab === 0 ? "active" : ""}
    aria-label="CSS Page of Progress Bar Component"
    onClick={() => setActiveTab(0)}
  >
    CSS
  </button>
</div>
<div className="card-content">
  {activeTab === 0 ? (
            <SyntaxHighlighter language="css" style={coy}>
            {formattedCSS}
            </SyntaxHighlighter>
  ) : (
    <ProgressHtml props={props} />
  )}
</div>
  </>
  )
}

export default ProgressBar