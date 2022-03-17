import useStuff from './use-stuff.hook';
import { welcomeWidgetMessage } from './Widget.helpers';
import { WidgetType } from './Widget.types';

export type WidgetChildProps = {
  type: WidgetType;
};

function WidgetChild({ type }: WidgetChildProps) {
  /**
   * A sub-component used exclusively by
   * Widget.tsx (or other components in
   * this directory).
   */
  const { count, plus, minus } = useStuff();
  const message = welcomeWidgetMessage(type);

  return (
    <div>
      <p>{message}</p>
      <span>liked: {count}</span>
      <button onClick={() => plus()}>✅ Like</button>
      <button onClick={() => minus()}>❎ Hate</button>
    </div>
  );
}
export default WidgetChild;
