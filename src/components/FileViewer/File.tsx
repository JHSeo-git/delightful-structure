import Expander from './Expander';
import FileIcon from './FileIcon';
import type { FileT } from './FileViewer.types';

export type FileProps = {
  file: FileT;
  slug: string;
  isSelected?: boolean;
  onClick: (slug: string) => void;
};

function File({ file, slug, isSelected, onClick }: FileProps) {
  const buttonStyle = {
    '--color': file.type === 'file' && file.isSelected ? 'hsl(50deg 100% 40%)' : 'inherit',
    '--weight': file.type === 'file' && file.isSelected ? '500' : '400',
  } as React.CSSProperties;

  const expanderStyle = {
    '--opacity': file.type === 'file' && file.isSelected ? 0.1 : 0,
  } as React.CSSProperties;

  return (
    <button
      className="button-file"
      style={buttonStyle}
      onClick={() => onClick(slug)}
      tabIndex={isSelected === false ? -1 : undefined}
    >
      <Expander style={expanderStyle} />
      <div className="icon-wrapper2">
        <FileIcon
          size={14}
          color={file.type === 'file' && file.isSelected ? 'hsl(50deg 100% 40%)' : '#000'}
        />
      </div>
      {file.name}
    </button>
  );
}

export default File;
