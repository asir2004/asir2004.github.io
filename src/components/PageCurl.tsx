import React from 'react';

interface PageCurlProps {
  children: React.ReactNode;
  className?: string;
}

const PageCurl: React.FC<PageCurlProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative bg-white rounded-md overflow-hidden shadow-md ${className} before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-10 before:h-10 before:bg-gradient-to-br before:from-transparent before:via-black/10 before:to-black/20 before:-rotate-45 before:origin-bottom-right before:shadow-[-2px_2px_4px_rgba(0,0,0,0.15)]`}
    >
      {children}
    </div>
  );
};

export default PageCurl;