import React from 'react'
import { Link } from 'react-router-dom'
import '../style/start.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../Redux/result_reducer'

export default function Start (){
    const inputRef = React.useRef(null) 
   
    const dispatch = useDispatch()

    function startQuiz (){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
  return (
    <div className='container'>
        <h1 className='title text-light '>Welocome to the Quiz</h1>
        <ol>
            <li>10 points is awarded for the correct answer.</li>
            <li>30 Seconds for each questions</li>
            <li>Results will be decalred at the end of the quiz</li>
        </ol>

        <form id="form">
            <input ref={inputRef } className='userid ' type='text' placeholder='Enter your name' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick = {startQuiz}>Start Quiz</Link>
        </div>
    </div>
  )
}
