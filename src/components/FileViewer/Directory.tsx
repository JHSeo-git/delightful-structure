import * as React from 'react';
import ChevronRight from './ChevronRight';
import Expander from './Expander';

export type DirectoryProps = {
  name?: string;
  slug: string;
  isExpanded?: boolean;
  onClick: (slug: string) => void;
  children: React.ReactNode;
};

function Directory({ name, slug, isExpanded, onClick, children }: DirectoryProps) {
  return (
    <div>
      <button className="button-directory" onClick={() => onClick(slug)}>
        <Expander />
        <div className={['icon-wrapper', isExpanded ? 'expanded' : ''].join(' ')}>
          <ChevronRight />
        </div>
        {name}
      </button>
      <div
        className="files"
        style={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
          overflow: isExpanded ? undefined : 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Directory;
