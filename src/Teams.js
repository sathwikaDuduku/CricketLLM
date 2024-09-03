import React, { useState, useEffect } from 'react';
import './Teams.css';
const Teams = () => {
  const [teams, setTeams] = useState({});
  const [selectedTeam, setSelectedTeam] = useState('');

  useEffect(() => {
    fetch('/team.json')
      .then(response => response.json())
      .then(data => {
        const teamsData = data.reduce((acc, team) => {
          acc[team.name.toLowerCase()] = team.players;
          return acc;
        }, {});
        setTeams(teamsData);
      });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <ul>
          {/* <li><a href="#" id="teamsLink">Teams</a></li> */}
          {/* <li><a href="#" id="matchesLink">Matches</a></li>
          <li><a href="#" id="scheduleLink">Schedule</a></li>
          <li><a href="#" id="statsLink">Statistics</a></li>
          <li><a href="#" id="newsLink">News</a></li> */}
        </ul>
      </nav>
      <div className="content">
        <section id="teams">
          <div id="teamButtons">
            {Object.keys(teams).map((team) => (
              <button key={team} className="teamButton" onClick={() => setSelectedTeam(team)}>
                {team.charAt(0).toUpperCase() + team.slice(1)}
              </button>
            ))}
          </div>

          {selectedTeam && (
            <div className="teamDetails">
              <h2>{selectedTeam.charAt(0).toUpperCase() + selectedTeam.slice(1)} squad</h2>
              <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {teams[selectedTeam].map((player, index) => (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>{player.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Teams;
