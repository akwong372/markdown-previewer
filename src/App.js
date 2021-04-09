import React, { useState } from 'react';

const App = () => {

  const [testState, setTestState] = useState(0);

  return (
    <div className='container'>

      <textarea id='editor' placeholder='Markdown here'></textarea>

    </div>
  );

}

export default App;
