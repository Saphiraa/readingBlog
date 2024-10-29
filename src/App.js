import pillOne from './pillOne.png';
import pillTwo from './pillTwo.png';
import pauseOne from './pauseOne.png';
import lineOne from './lineOne.png';
import lineTwo from './lineTwo.png';
import lineThree from './lineThree.png';
import pillRightVertical from './pillRightVertical.png';
import triangle from './triangle.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pillOne} className=".App-pill-one" alt="pillone" />
        <img src={pillTwo} className=".App-pill-two" alt="pilltwo" />
        <div className="pause-container">
          <img src={pauseOne} className=".App-pause-one" alt="pauseone" />
          <img src={pauseOne} className=".App-pause-two" alt="pausetwo" />
        </div>
        <img src={lineOne} className=".App-line-one" alt="lineone" />
        <img src={lineTwo} className=".App-line-two" alt="linetwo" />
        <img src={lineThree} className=".App-line-three" alt="linethree" />
        <div className="pill-try"></div>
        <img src={pillRightVertical} className=".App-pill-right-vertical" alt="pillRightVertical" />
        <div className="burger">
          <img src={pillOne} className=".burger-pill" alt="pillone" />
          <img src={pillOne} className=".burger-pill" alt="pillone" />
          <img src={pillOne} className=".burger-pill" alt="pillone" />
          <img src={pillRightVertical} className=".App-pill-right-horizontal" alt="pillRightHorizontal" />
        </div>
        <img src={triangle} className=".App-triangle" alt="triangle" />
        <div className="dialogue-bubble"></div>
        <div className="dialogue-bubble-pointer"></div>
        <p className="name">Saaraa's</p>
        <p className="description">Book Rants*</p>
        <p className="sub-text">*and reviews</p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
