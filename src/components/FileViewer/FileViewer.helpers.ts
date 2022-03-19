import type { FileT } from './FileViewer.types';

export function getFile(files: FileT[], testFn: (file: FileT) => boolean) {
  const items = [...files];
  while (items.length) {
    const item = items.shift();
    if (!item) continue;
    if (item.type === 'file') {
      const matches = testFn(item);
      if (matches) {
        return item;
      }
    }
    if (item.type === 'directory') {
      items.push(...item.contents);
    }
  }
}

export function openFile(items: FileT[], fileSlugToOpen: string, slugPrefix = '') {
  items.forEach((item) => {
    const slug = `${slugPrefix}/${item.name}`;
    if (item.type === 'file') {
      item.isSelected = fileSlugToOpen === slug;
    } else {
      openFile(item.contents, fileSlugToOpen, slug);
    }
  });
}
