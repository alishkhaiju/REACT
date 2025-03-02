import './App.css'
import { useState } from 'react'

const Card = ({ title }) => {
  const[IsFollowed,setIsFollowed]=useState(false)
  const[count,setCount]=useState(0)
    

  return (
    <div className='cardDesign'>
      <h2>This is {title} </h2>
      <h3>Count: {count}</h3>
      <button onClick={()=>{setIsFollowed(!IsFollowed)
        setCount(count + 1)}
      }> {IsFollowed ? 'unfollow':'follow'}
      </button>

    </div>
    )

  }
function App() {

  return (
    <div>
      <h1>Hi this is React!!!</h1>
      <p className='mainParagraph'>The first day of learning React JS</p>

      <Card title='Card 1'/>
      <Card title='Card 2' />
    </div>
  )
}

export default App