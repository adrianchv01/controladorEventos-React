import { useState } from "react";
import History from "./components/History";


const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    console.log(left)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    console.log(right)
    setTotal(left + right)
  }

  const Button = ({handleClick, text}) => {
    return(
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }
  
  return(
    <div>
      <div>
        {left}
      </div>
      <Button handleClick = {handleLeftClick} text='Left'/>
      <Button handleClick = {handleRightClick} text='RIGHT'/>
      {right}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks}/>
    </div>
  )
}
export default App;