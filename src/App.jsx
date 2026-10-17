import './App.css'
import Card from './Card'

function App() {

  return (
    <div className='listOfCards'>
      <Card name="daviti" role="mentor" city="kutaisi"/>
      <Card name="keti" role="student" city="tbilisi"/>
      <Card name="giorgi" role="visitor" city="batumi"/>
    </div>
  )
}

export default App
