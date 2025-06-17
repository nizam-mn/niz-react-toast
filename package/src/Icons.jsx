import React from "react";
import "./App.css";

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);
const SuccessIcon = () => (
  <svg fill="#5eb62e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
);
const FailureIcon = () => (
  <svg fill="#d92323" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
  </svg>
);
const WarningIcon = () => (
  <svg fill="#ffda00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
  </svg>
);
const InfoIcon = () => (
  <svg fill="#3f9feb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" transform="rotate(180)">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
  </svg>
);
const LoadingIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <radialGradient id="a9">
    <stop offset="0" stop-color="#484848"/>
    
  </radialGradient>
  <circle transform-origin="center" fill="none" stroke="url(#a9)" stroke-width="24" stroke-linecap="round" stroke-dasharray="350" stroke-dashoffset="240" cx="100" cy="100" r="70">
    <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="1" values="-360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"/>
  </circle>
  <circle transform-origin="center" fill="none" opacity=".2" stroke="#484848" stroke-width="24" stroke-linecap="round" cx="100" cy="100" r="70"/>
</svg>
);

export { CloseIcon, SuccessIcon, FailureIcon, WarningIcon, InfoIcon, LoadingIcon };
