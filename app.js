// Fighter data including multiple pics
const match = {
  players: {
    uid1: { pics: [
        "https://via.placeholder.com/300x200?text=Fighter+A1",
        "https://via.placeholder.com/300x200?text=Fighter+A2",
        "https://via.placeholder.com/300x200?text=Fighter+A3"
      ], wins:0, losses:0, draws:0 },
    uid2: { pics: [
        "https://via.placeholder.com/300x200?text=Fighter+B1",
        "https://via.placeholder.com/300x200?text=Fighter+B2"
      ], wins:0, losses:0, draws:0 }
  },
  commentary: [],
  spectatorChat: []
};

// Set initial pics for fighter divs
const fighterADiv = document.getElementById('fighterA');
const fighterBDiv = document.getElementById('fighterB');
fighterADiv.style.backgroundImage = `url(${match.players.uid1.pics[0]})`;
fighterBDiv.style.backgroundImage = `url(${match.players.uid2.pics[0]})`;

// Update stats
function updateStats() {
  document.getElementById('statsA').textContent = `Wins: ${match.players.uid1.wins} | Losses: ${match.players.uid1.losses} | Draws: ${match.players.uid1.draws}`;
  document.getElementById('statsB').textContent = `Wins: ${match.players.uid2.wins} | Losses: ${match.players.uid2.losses} | Draws: ${match.players.uid
