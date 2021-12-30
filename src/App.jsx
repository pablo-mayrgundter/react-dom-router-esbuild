import React, { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Panel from './Panel'
// Causes error in react:
//   Uncaught (in promise) Error: Dynamic require of "./Panel-EALXS26H.js" is not supported
//      at chunk-SN6E3CO2.js:13
//      at App.jsx:3
//const Panel = React.lazy(() => import('./Panel'))


function App() {
  const location = useLocation();
  const [path, setPath] = React.useState('');

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div>
      <h1>Hello, whirled!!</h1>
      Path: {path}<br/>
      <Suspense fallback={<div>Loading...</div>}>
        <Panel/>
      </Suspense>
    </div>
  );
}

export default App;
