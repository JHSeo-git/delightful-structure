/**
 * An example of a simpler
 * React component
 */
export type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  /* Header stuff here */
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
export default Header;
