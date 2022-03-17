import Header from '../Header';
import Widget from '../Widget';

/**
 * This is the root component in
 * the React application.
 */
function App() {
  return (
    <div className="app">
      <Header title="Delightful React File/Directory Structure" />
      <Widget type="audio" />
    </div>
  );
}

export default App;
