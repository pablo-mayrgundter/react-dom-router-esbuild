import React from 'react'
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const [path, setPath] = React.useState('');

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div>
      <h1>Hello, whirled!!</h1>
      Path: {path}
    </div>
  );
}

export default App;
