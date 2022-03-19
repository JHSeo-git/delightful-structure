export type ExpanderProps = {
  style?: React.CSSProperties;
};

function Expander({ style }: ExpanderProps) {
  return <div className="expander" style={style} />;
}

export default Expander;
