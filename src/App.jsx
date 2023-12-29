import './App.css'
import Display from './components/Display'
import KeysBoard from './components/KeysBoard'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState("0")
  const [operator, setOperator] = useState('')
  const [value, setValue] = useState(0)
  const [hasDecimal, setHasDecimal] = useState(false)
  const addNumber = (number) => {
    if (display === "0") {
      setDisplay(number.toString())
    } else {
      setDisplay(display + number.toString())
    }
  }
  const addOperator = (operator) => {
    if (operator !== '' && display === "0") {
      setOperator(operator)
      return
    }
    setOperator(operator)
    setValue(parseFloat(display))
    setDisplay("0")
    setHasDecimal(false)
  }
  const addDecimal = () => {
    if (!hasDecimal) {
      setDisplay(display + '.')
      setHasDecimal(true)
    }
  }
  const calculate = () => {
    switch (operator) {
      case '+':
        setDisplay((value + parseFloat(display)).toString())
        break
      case '-':
        setDisplay((value - parseFloat(display)).toString())
        break
      case '*':
        setDisplay((value * parseFloat(display)).toString())
        break
      case '/':
        setDisplay((value / parseFloat(display)).toString())
        break
      default:
        break
    }
    setOperator('')
    setValue(0)
    setHasDecimal(false)
  }
  const reset = () => {
    setDisplay("0")
    setOperator('')
    setValue(0)
    setHasDecimal(false)
  }

  return (
    <div className='flex flex-col justify-center items-center h-[100vh] font-mono gap-5'>
      <Display result={display}/>
      <KeysBoard addNumber={addNumber} addOperator={addOperator} addDecimal={addDecimal} calculate={calculate} reset={reset}/>
    </div>
  )
}

export default App
