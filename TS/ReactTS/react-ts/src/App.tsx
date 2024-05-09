import React from 'react';
import Context from './components/Context';
import Redux from './components/Redux';


const App: React.FC = () => {
  return (
    <div>
      {/* <h1>React with TypeScript Example</h1> */}
       <Context/>
       <Redux/>
    </div>
  );
};

export default App;
