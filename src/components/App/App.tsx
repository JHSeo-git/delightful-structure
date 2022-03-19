import { Routes, Route } from 'react-router-dom';
import FileViewer from '../FileViewer';
import Header from '../Header';
import Widget from '../Widget';
import { initFiles } from './App.mock';

/**
 * This is the root component in
 * the React application.
 */
function App() {
  return (
    <div>
      <Header title="Delightful React File/Directory Structure" />
      <main>
        <Routes>
          <Route path="/" element={<Widget type="audio" />} />
          <Route path="/file-viewer" element={<FileViewer initialFiles={initFiles} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
