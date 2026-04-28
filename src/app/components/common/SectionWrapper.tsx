import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  backgroundElement?: React.ReactNode;
  className?: string;
  py?: string;
}

export function SectionWrapper({
  id,
  children,
  backgroundElement,
  className = '',
  py = 'py-24',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-screen ${py} bg-black relative overflow-hidden ${className}`}
    >
      {backgroundElement}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
