import { NavLink } from 'react-router-dom';

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
      <nav>
        <NavLink to="/">Basic Example</NavLink>
        <NavLink to="/file-viewer">Fileviewer Example</NavLink>
      </nav>
    </header>
  );
}
export default Header;
