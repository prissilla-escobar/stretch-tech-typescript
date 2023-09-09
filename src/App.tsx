import { useEffect } from 'react';
import './App.css';
import { getPlayers, getTeams } from './API';

function App() {

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
    <header>Hello World</header>
  )
  }
export default App;
