import * as React from 'react';
import produce from 'immer';
import type { FileT } from './FileViewer.types';
import Directory from './Directory';
import File from './File';
import { openFile } from './FileViewer.helpers';

type GenerateChidrenProps = {
  handleToggleDirectory: (slug: string) => void;
  handleSelectFile: (slug: string) => void;
  isExpanded?: boolean;
  isSelected?: boolean;
};

function generateChildren(items: FileT[], props: GenerateChidrenProps, slugPrefix = '') {
  return items.map((item) => {
    const slug = `${slugPrefix}/${item.name}`;
    if (item.type === 'directory') {
      return (
        <Directory
          key={slug}
          slug={slug}
          name={item.name}
          isExpanded={item.isExpanded}
          onClick={props.handleToggleDirectory}
        >
          {generateChildren(item.contents, { ...props, isExpanded: item.isExpanded }, slug)}
        </Directory>
      );
    } else {
      return (
        <File
          key={slug}
          file={item}
          slug={slug}
          onClick={props.handleSelectFile}
          isSelected={props.isSelected}
        />
      );
    }
  });
}

export type SidebarProps = {
  files: FileT[];
  setFiles: React.Dispatch<React.SetStateAction<FileT[]>>;
};

function Sidebar({ files, setFiles }: SidebarProps) {
  // FIXME: hmr not working
  const handleToggleDirectory = (directorySlug: string) => {
    const paths = directorySlug.slice(1).split('/');

    setFiles((f) => {
      return produce(f, (draft: FileT[]) => {
        let reference: FileT | undefined = { type: 'directory', contents: draft };

        while (paths.length) {
          if (reference?.type === 'directory') {
            const currentPath = paths.shift();

            if (currentPath) {
              reference = reference.contents.find((item) => {
                return item.name === currentPath;
              });
            }
          }
        }

        if (reference?.type === 'directory') {
          reference.isExpanded = !reference.isExpanded;
        }
      });
    });
  };

  const handleSelectFile = (fileSlug: string) => {
    setFiles((f) => {
      return produce(f, (draft: FileT[]) => {
        openFile(draft, fileSlug);
      });
    });
  };

  const children = generateChildren(files, {
    handleToggleDirectory,
    handleSelectFile,
  });

  console.log(files);

  return <div className="sidebar">{children}</div>;
}

export default Sidebar;
