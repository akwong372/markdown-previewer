import React, { useState } from 'react';

const App = () => {

  const [text, setText] = useState('');

  return (
    <div className='container'>

      <textarea id='editor' placeholder='Markdown here' onChange={e=>setText(e.target.value)}></textarea>

      <div id='preview'>{text}</div>

    </div>
  );

}

export default App;
