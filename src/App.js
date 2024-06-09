import { useRef, useState } from "react"
import Button from "./Components/Button";
import './App.css'
export default function App(){
  const inp = useRef(null)
  function equal(){
    try {
      let ev = eval(inp.current.value)
      if(Number.isInteger(ev)){
        ev = ev
        }else{
          ev=ev.toFixed(2)
          }
        inp.current.value = ev
    } catch (error) {
      inp.current.value = `Syntax Error`
    }
  }
    return (
      <div className="calculator">
      <input ref={inp} readOnly className="display"/>
      <div className="buttons">
          <Button value="7" onClick={()=>{inp.current.value += 7}} class="number"/>
          <Button value="8" onClick={()=>{inp.current.value += 8}} class="number"/>
          <Button value="9" onClick={()=>{inp.current.value += 9}} class="number"/>
          <Button value="/" onClick={()=>{inp.current.value += `/`}} class="operator"/>
          <Button value="6" onClick={()=>{inp.current.value += 6}}class="number" />
          <Button value="5" onClick={()=>{inp.current.value += 5}}class="number" />
          <Button value="4" onClick={()=>{inp.current.value += 4}}class="number" />
          <Button value="*" onClick={()=>{inp.current.value += `*`}}class="operator" />
          <Button value="3" onClick={()=>{inp.current.value += 3}}class="number"/>
          <Button value="2" onClick={()=>{inp.current.value += 2}}class="number" />
          <Button value="1" onClick={()=>{inp.current.value += 1}}class="number" />
          <Button value="-" onClick={()=>{inp.current.value += `-`}}class="operator" />
          <Button value="0" onClick={()=>{inp.current.value += 0}}class="number" />
          <Button value="." onClick={()=>{inp.current.value += `.`}}class="number" />
          <Button value="=" onClick={equal} class="equal"/>
          <Button value="+" onClick={()=>{inp.current.value += `+`}}class="operator" />
          <Button value="C" onClick={()=>{inp.current.value = ``}}class="clear" />
      </div>
      </div>
    );
}