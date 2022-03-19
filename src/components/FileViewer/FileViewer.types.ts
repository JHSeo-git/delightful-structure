export type FileT =
  | {
      name?: string;
      slug?: string;
      contents: string;
      isSelected?: boolean;
      type: 'file';
    }
  | {
      name?: string;
      slug?: string;
      contents: FileT[];
      isExpanded?: boolean;
      type: 'directory';
    };
