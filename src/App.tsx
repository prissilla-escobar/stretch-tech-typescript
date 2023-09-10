import { useEffect } from 'react'
import './App.css'
import { getPlayers, getTeams } from './API'
import Header from './Components/Header/Header'

const App = () => {

  useEffect(() => {
    getPlayers()
    .then((data: any) => {
      console.log(data)
    })
    getTeams()
      .then((data: any) => {
        console.log(data)
      })
  },[])

  return (
    <main>
      <Header />
      <div className='test'>BODY TEST</div>
    </main>
  )
}

export default App;
