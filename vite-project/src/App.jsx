import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./component/Card"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex   '>
      <Card img="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" name="saurabh kamane"/>
      <Card img="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724284800&semt=ais_hybrid" name="aniket gajankush"/>
      <Card img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724284800&semt=ais_hybrid" name="nikil gajankush"/>
      <Card img="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" name="rahul deo"/>
      </div>
    </>
  )
}

export default App
