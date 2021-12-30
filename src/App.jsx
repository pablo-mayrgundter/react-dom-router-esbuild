import React, { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
const Panel = React.lazy(() => import('./Panel'))


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
