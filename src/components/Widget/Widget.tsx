import { WIDGET_MAKER_NAME, WIDGET_VERSION } from './Widget.constants';
import { WidgetType } from './Widget.types';
import WidgetChild from './WidgetChild';

export type WidgetProps = {
  type: WidgetType;
};
function Widget({ type }: WidgetProps) {
  return (
    <div>
      <div>
        Widget type is <code>{type}</code>
      </div>
      <div>
        Version: <strong>{WIDGET_VERSION}</strong> | Maker: <small>{WIDGET_MAKER_NAME}</small>
      </div>
      <div>
        <WidgetChild type={type} />
      </div>
    </div>
  );
}

export default Widget;
