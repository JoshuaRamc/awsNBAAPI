import { Amplify, API } from "aws-amplify";
import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import config from "../aws-exports";

Amplify.configure(config);

function Add() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [playerPoints, setPlayerPoints] = useState("");
  const [playerAssists, setPlayerAssists] = useState("");
  const [playerRebounds, setPlayerRebounds] = useState("");

  useEffect(() => {
    API.get("nbaapi", "/nba/name").then((playerRes) =>
      setPlayers([...players, ...playerRes])
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("nbaapi", "/nba", {
      body: {
        name: playerName,
        team: playerTeam,
        points: playerPoints,
        assists: playerAssists,
        rebounds: playerRebounds,
      },
    }).then(() => {
      setPlayers([
        {
          name: playerName,
          team: playerTeam,
          points: playerPoints,
          assists: playerAssists,
          rebounds: playerRebounds,
        },
        ...players,
      ]);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        NBA API Database Item Adder
        <form onSubmit={handleSubmit}>
          <input
            value={playerName}
            placeholder="Lebron James"
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <input
            value={playerTeam}
            placeholder="Los Angeles Lakers"
            onChange={(e) => setPlayerTeam(e.target.value)}
          />
          <input
            value={playerPoints}
            placeholder="28.9"
            onChange={(e) => setPlayerPoints(e.target.value)}
          />
          <input
            value={playerAssists}
            placeholder="6.8"
            onChange={(e) => setPlayerAssists(e.target.value)}
          />
          <input
            value={playerRebounds}
            placeholder="8.3"
            onChange={(e) => setPlayerRebounds(e.target.value)}
          />
          <button>Add Player</button>
        </form>
        <ul>
          {players.map((player) => (
            <div>
              {player.name}, {player.team}, {player.points} PPG,{" "}
              {player.rebounds} RBS, {player.assists} ASTS
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Add;
