import { WidgetType } from './Widget.types';

/**
 * Helper functions used exclusively
 * by the files in this directory.
 */
export const welcomeWidgetMessage = (widgetType: WidgetType): string => {
  let widget: string | null = null;

  switch (widgetType) {
    case 'text':
      widget = 'text';
    case 'image':
      widget = 'image';
    case 'video':
      widget = 'video';
    case 'audio':
      widget = 'audio';
  }

  return widget === null ? 'Oh... I miss this widget type' : `Welcome to the ${widget} widget!`;
};
