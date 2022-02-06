import { useState } from 'react';
import './main.css';

const Main =()=> {
  const [apiKey,setApiKey] = useState();
  
  return (
    <div class="grid-container">
      <div class="grid-item item1">1</div>
      <div class="grid-item item2">2</div>
  </div>
  );
};
export default Main;
