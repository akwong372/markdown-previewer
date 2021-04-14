import React, { useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const App = () => {

  const [text, setText] = useState('');

  return (
    <div className='container'>

      <textarea id='editor' placeholder='Markdown here' onChange={e=>setText(DOMPurify.sanitize(marked(e.target.value)))}></textarea>

      <div id='preview' dangerouslySetInnerHTML={{__html: text}}>
        </div>

    </div>
  );

}

export default App;
