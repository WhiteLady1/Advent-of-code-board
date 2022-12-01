import axios from 'axios';
import React from 'react';
import './App.scss';
import { Board } from './components';

function App() {
  const [boadData, setBoardData] = React.useState();

  const getBoardData = async () => {
    const data = await axios.get('https://adventofcode.com/2022/leaderboard/private/view/1534381');
    setBoardData(data.data);
    console.log(data.data);
  }

  getBoardData();
  console.log(boadData);

  return (
    <div className="App">
      <header className="App-header">
        <h2>DD Leaderboard</h2>
        <h3>Advent of Code 2022</h3>
        <Board />
      </header>
    </div>
  );
}

export default App;
