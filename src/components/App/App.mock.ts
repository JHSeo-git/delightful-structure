import type { FileT } from '../FileViewer/FileViewer.types';

export const initFiles: FileT[] = [
  {
    type: 'directory',
    name: 'src',
    slug: '/src',
    isExpanded: true,
    contents: [
      {
        type: 'directory',
        name: 'components',
        slug: '/src/components',
        isExpanded: true,
        contents: [
          {
            type: 'directory',
            name: 'FileViewer',
            slug: '/src/components/FileViewer',
            isExpanded: true,
            contents: [
              {
                type: 'file',
                name: 'Directory.tsx',
                slug: '/src/components/FileViewer/Directory.tsx',
                isSelected: true,
                contents: `Directory.tsx file content`,
              },
              {
                type: 'file',
                name: 'Expander.tsx',
                slug: '/src/components/FileViewer/Expander.tsx',
                isSelected: false,
                contents: `Expander.tsx file content`,
              },
            ],
          },
        ],
      },
    ],
  },
];
