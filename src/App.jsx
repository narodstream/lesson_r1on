//import { TEST1, TEST2 } from './test';
import './index.css';
import Dog from './dog.jpg';

import { hello2 } from './myFolder';
import { hello } from './myFolder/hello';

console.log(hello2, hello);

function App() {
  return (
    <>
      Hello
      <div className='hello'>
      <img src={Dog} />
    </div>
    </>
  )
}

export default App
