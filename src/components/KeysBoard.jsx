import React from "react";
import Button from "./Button";

const KeysBoard = ({ addNumber, addOperator, addDecimal, calculate, reset }) => {
  return (
    <div className="grid grid-rows-5 grid-cols-4 gap-5 w-[30%]">
      <Button value="C" handleKeyClick={() => reset()} type="reset"/>
      <Button value="7" handleKeyClick={() => addNumber(7)} />
      <Button value="8" handleKeyClick={() => addNumber(8)} />
      <Button value="9" handleKeyClick={() => addNumber(9)} />
      <Button value="/" handleKeyClick={() => addOperator('/')} type="operator" />
      <Button value="4" handleKeyClick={() => addNumber(4)} />
      <Button value="5" handleKeyClick={() => addNumber(5)} />
      <Button value="6" handleKeyClick={() => addNumber(6)} />
      <Button value="*" handleKeyClick={() => addOperator('*')} type="operator" />
      <Button value="1" handleKeyClick={() => addNumber(1)} />
      <Button value="2" handleKeyClick={() => addNumber(2)} />
      <Button value="3" handleKeyClick={() => addNumber(3)} />
      <Button value="-" handleKeyClick={() => addOperator('-')} type="operator" />
      <Button value="0" handleKeyClick={() => addNumber(0)} />
      <Button value="." handleKeyClick={() => addDecimal('.')} />
      <Button value="=" handleKeyClick={() => calculate()} type="equal" />
      <Button value="+" handleKeyClick={() => addOperator('+')} type="operator" />
    </div>
  )
}

export default KeysBoard;