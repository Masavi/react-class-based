import { useState } from 'react';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

import './App.css';

function App() {
  const [showClassBased, setShowClassBased] = useState(false);

  return (
    <div className="App">
      <h1>Class-based Components 🧩</h1>
      <button onClick={() => setShowClassBased(!showClassBased)}>
        Change components
      </button>
      
      { !showClassBased && <Lifecycle /> }
      { showClassBased && <ClassBased
        title="Gamma"
        imageURL="https://ih1.redbubble.net/image.1431275223.8196/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" />}
      {/* <ClassBased
        title="Alpha"
        imageURL="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.comedycalls.com%2FProducts%2Fresource%2F18rbbvDwJJw%2Fthumbnail.jpg&f=1&nofb=1&ipt=5e66a15f411b44f29a12e66b6dc7f8f421c296645f3dea0d84b2dda99d99561c&ipo=images" />
       */}
    </div>
  );
}

export default App;
