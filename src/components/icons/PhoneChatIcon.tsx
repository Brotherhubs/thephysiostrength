import React from 'react';

const PhoneChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 64 64" 
    className="w-16 h-16 sm:w-20 sm:h-20 text-slate-700" // Adjusted size and color
    {...props}
  >
    <path 
      fill="currentColor" 
      d="M46.7,30.3c-1.3-1.3-3-2.3-4.9-2.9c-0.6-0.2-1.3,0.1-1.5,0.7c-0.2,0.6,0.1,1.3,0.7,1.5c1.6,0.5,3,1.3,4.1,2.4
      c1.1,1.1,1.9,2.5,2.4,4.1c0.2,0.6,0.8,1,1.5,0.7c0.6-0.2,1-0.8,0.7-1.5C49,33.3,48,31.6,46.7,30.3z"
    />
    <path 
      fill="currentColor" 
      d="M51.8,26.6c-2-2-4.4-3.5-7-4.5c-0.6-0.2-1.3,0.1-1.5,0.7c-0.2,0.6,0.1,1.3,0.7,1.5c2.2,0.8,4.3,2.1,6,3.7
      c1.7,1.7,3,3.8,3.7,6c0.2,0.6,0.8,1,1.5,0.7c0.6-0.2,1-0.8,0.7-1.5C55.3,31,53.9,28.6,51.8,26.6z"
    />
    <path 
      fill="currentColor" 
      d="M38.3,43.4c-4.3-0.8-8.3-2.6-11.8-6c-3.5-3.5-5.2-7.5-6-11.8c-0.2-0.8-1-1.3-1.8-1.2c-0.8,0.2-1.3,1-1.2,1.8
      c0.9,4.9,2.9,9.5,6.7,13.2c3.8,3.8,8.4,5.8,13.2,6.7c0.8,0.1,1.6-0.4,1.8-1.2c0.1-0.8-0.4-1.6-1.2-1.8L38.3,43.4z"
    />
    <path 
      fill="currentColor" 
      d="M27.2,38.9C26,40,25.2,41,24.7,41s-1.1-0.3-2.1-1.4c-1-1-1.5-1.9-1.6-2.4c-0.1-0.5,0.2-1.2,1.1-2.2l0.2-0.2
      c0.1,0,0.1,0,0.2,0c0.4,0.3,0.8,0.7,1.2,1c0.1,0.1,0.2,0.2,0.3,0.2c0.4,0.4,0.8,0.8,1.2,1.2c0.1,0.1,0.2,0.2,0.3,0.2
      C26.5,38.1,26.9,38.5,27.2,38.9z M28.7,32.4c-0.1,0-0.1-0.1-0.2-0.1c-0.4-0.4-0.8-0.8-1.2-1.2c-0.1-0.1-0.2-0.2-0.3-0.2
      c-0.4-0.3-0.8-0.7-1.2-1c-0.1-0.1-0.1-0.1-0.2-0.2l-0.2,0.2c-0.9,1-1.2,1.7-1.1,2.2c0.1,0.5,0.6,1.4,1.6,2.4
      c1,1,1.6,1.4,2.1,1.4s1-0.4,2.4-1.6l0.2-0.2c0,0,0,0,0,0c0,0,0,0,0,0L28.7,32.4z"
    />
    <path 
      fill="currentColor"
      d="M32.8,16.5c-7.5,0-13.6,6.1-13.6,13.6c0,3.6,1.4,6.9,3.8,9.4l-3.3,3.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.3-3.3c2.4,2.4,5.7,3.8,9.4,3.8c7.5,0,13.6-6.1,13.6-13.6S40.2,16.5,32.8,16.5z M32.8,41.1c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4s11.4,5.1,11.4,11.4S39.1,41.1,32.8,41.1z"
    />
    <circle fill="currentColor" cx="26.8" cy="29.7" r="1.8"/>
    <circle fill="currentColor" cx="32.8" cy="29.7" r="1.8"/>
    <circle fill="currentColor" cx="38.7" cy="29.7" r="1.8"/>
  </svg>
);

export default PhoneChatIcon;