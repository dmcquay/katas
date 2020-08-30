import React, {useState} from 'react';
import './App.css';

const defaultMoney = 1500

function saveState(state) {
  console.log('saving state to LS: ', state)
  localStorage.setItem('state', JSON.stringify(state))
}

function loadState() {
  console.log('loading state from LS')
  const strVal = localStorage.getItem('state')
  if (strVal === null) return initialState
  else return JSON.parse(strVal)
}

const initialState = {players:[]}

function compareNames( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

function App() {
  const [playerNameInputValue, setPlayerNameInputValue] = useState('')
  const [state, setState] = useState(loadState())

  function setStateWrapper(state) {
    state = {
      ...state,
      players: state.players.sort(compareNames)
    }
    saveState(state)
    setState(state)
  }

  function addPlayer() {
    setStateWrapper({...state, players: [
      ...state.players,
      {
        name: playerNameInputValue,
        money: defaultMoney
      }
    ]})
    setPlayerNameInputValue('')
  }

  function setPlayerMoney(name, value) {
    const player = state.players.find(p => p.name === name)
    const newPlayers = [
      ...state.players.filter(p => p.name !== name),
      {
        ...player,
        money: value
      }
    ]
    setStateWrapper({...state, players: newPlayers})
  }

  return (
    <div className="App">
      <input type="text" value={playerNameInputValue} onChange={e => setPlayerNameInputValue(e.target.value)} />
      <button onClick={addPlayer} >Add Player</button>
      <h2>Players</h2>
        {state.players.map(player => <Player key={player.name} {...player} setMoney={(value) => setPlayerMoney(player.name, value)}/>)}
    </div>
  );
}

function Player({name, money, setMoney}) {
  const [moneyInputValue, setMoneyInputValue] = useState('')

  const modifyMoney = isPositive => {
    const val = parseInt(moneyInputValue) * (isPositive ? 1 : -1)
    setMoney(money + val)
    setMoneyInputValue('')
  }

  return <div>
    <div>
      <label>Name:</label>
      <span>{name}</span>
    </div>
    <div>
      <label>Money:</label>
      <span>{money}</span>
    </div>
    <input type="text" value={moneyInputValue} onChange={e => setMoneyInputValue(e.target.value)} />
    <button onClick={() => modifyMoney(true)}>Add</button>
    <button onClick={() => modifyMoney(false)}>Spend</button>
  </div>
}

export default App;
