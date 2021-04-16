import React, { useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const App = () => {

  const defaultText = `# Heading
  ## Subheading
  [Inline link](https://www.google.com)\n
  \`inline code\`\n
    code block\n
  1. First ordered list item
  2. Another item

  >blockquote\n

  **bolded text**

  image\n
  ![alt text](https://i.imgur.com/YNqda8M.jpg "meme")`;
  const [text, setText] = useState(defaultText);

  return (
    <div className='container'>

      <textarea id='editor' placeholder='Markdown here' onChange={e=>setText(DOMPurify.sanitize(e.target.value))} defaultValue={defaultText}>
      </textarea>

      <div id='preview' dangerouslySetInnerHTML={{__html: marked(text)}}>
        </div>

    </div>
  );

}

export default App;
