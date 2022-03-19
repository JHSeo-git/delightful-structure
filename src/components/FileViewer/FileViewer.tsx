import { useState } from 'react';
import FileContent from './FileContent';
import { getFile } from './FileViewer.helpers';
import Sidebar from './Sidebar';
import type { FileT } from './FileViewer.types';

export type FileViewerProps = {
  initialFiles?: FileT[];
};

function FileViewer({ initialFiles = [] }: FileViewerProps) {
  const [files, setFiles] = useState(initialFiles);

  const activeFile = getFile(files, (file) => file.type === 'file' && !!file.isSelected);

  return (
    <div className="file-viewer-wrapper">
      <Sidebar files={files} setFiles={setFiles} />
      <FileContent contents={activeFile?.contents} />
    </div>
  );
}

export default FileViewer;
