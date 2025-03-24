
import { useState} from 'react'
import './Calculator.css'
import { evaluate } from 'mathjs'


function Calculator(){
	let [result,setResult]=useState('')

	let[hasdot,setHasdot]=useState(false)

	



	const clickHandler=(e)=>{
		let input= e.target.innerText
		if(input=='.') {
			if(hasdot==true)return
			else setHasdot(true)
		}
		if(input=='+' || input=='*' || input=='/' || input=='-'){
			setHasdot(false)
		}
	setResult(result+input)	

	

	}
	const clearBtn= ()=>{
		setResult('')

	}

	const backBtn=()=>{
		setResult(result.slice(0,-1))
	}

	const equalBtn= ()=>{
		setResult(String(evaluate(result)))
		setHasdot(false)
	}
	return(
		<>
		
		
		<div className='container'>
          <div className='screen'>{result}</div>
		  <div className='button'> 
		  <button onClick={clearBtn} className='color  twoCol'>Clear</button>
			<button onClick={backBtn} className='color'>C</button>
			<button onClick={clickHandler} className='color'>/</button>
			<button onClick={clickHandler}>7</button>
			<button onClick={clickHandler}>8</button>
			<button onClick={clickHandler}>9</button>
			<button onClick={clickHandler} className='color'>*</button>
			<button onClick={clickHandler}>4</button>
			<button onClick={clickHandler}>5</button>
			<button onClick={clickHandler}>6</button>
			<button onClick={clickHandler} className='color'>-</button>
			<button onClick={clickHandler}>1</button>
			<button onClick={clickHandler}>2</button>
			<button onClick={clickHandler}>3</button>
			<button onClick={clickHandler} className='color'>+</button>
			<button onClick={clickHandler}>0</button>
			<button onClick={clickHandler}>.</button>
			<button  onClick={equalBtn} className='color  twoCol'>=</button>
		  </div>
		</div>
		
		</>
	)
}


export default Calculator