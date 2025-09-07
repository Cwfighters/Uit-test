// Fake match data
const match = {
  players: {
    uid1: { pic: "https://via.placeholder.com/300x200?text=Fighter+A", color:"#ff4d4d" },
    uid2: { pic: "https://via.placeholder.com/300x200?text=Fighter+B", color:"#4d79ff" }
  },
  commentary: [],
  spectatorChat: []
};

// Load fighters
document.getElementById('fighterA').style.backgroundImage = `url(${match.players.uid1.pic})`;
document.getElementById('fighterB').style.backgroundImage = `url(${match.players.uid2.pic})`;

const commentaryDiv = document.getElementById('commentary');
const chatMessagesDiv = document.getElementById('chatMessages');

// ---- Commentary Auto Feed ----
const fakeMoves = [
  { by:"uid1", text:"Player A locks in a chokehold!" },
  { by:"uid2", text:"Player B powers out with a slam!" },
  { by:"uid1", text:"Player A counters with a wrist lock!" },
  { by:"uid2", text:"Player B reverses and takes top position!" },
  { by:"uid1", text:"Player A attempts a submission hold!" },
  { by:"uid2", text:"Player B reaches the ropes just in time!" },
  { by:"uid1", text:"Player A goes for a flying knee strike!" },
  { by:"uid2", text:"Player B blocks and throws a counter punch!" }
];

let moveIndex = 0;
setInterval(()=>{
  if(moveIndex < fakeMoves.length){
    const move = fakeMoves[moveIndex++];
    match.commentary.push(move);
    const p = document.createElement('p');
    p.textContent = move.text;
    p.className = move.by === "uid1" ? "left" : "right";
    commentaryDiv.appendChild(p);
    commentaryDiv.scrollTop = commentaryDiv.scrollHeight; // auto scroll
  }
}, 2000);

// ---- Spectator Chat Auto Messages ----
const fakeChat = [
  { by:"Spectator1", text:"Wow that move was insane!" },
  { by:"Spectator2", text:"Player B looks strong!" },
  { by:"Spectator3", text:"Choke him out!!" },
  { by:"Spectator4", text:"No way, Player A is winning this!" }
];

let chatIndex = 0;
function renderChat() {
  chatMessagesDiv.innerHTML = "";
  match.spectatorChat.forEach(m => {
    const p = document.createElement('p');
    p.textContent = `${m.by}: ${m.text}`;
    chatMessagesDiv.appendChild(p);
  });
  chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

// Auto spectators join in
setInterval(()=>{
  if(chatIndex < fakeChat.length){
    match.spectatorChat.push(fakeChat[chatIndex++]);
    renderChat();
  }
}, 3000);

// ---- Chat Toggle ----
const chatPanel = document.getElementById('spectatorChat');
document.getElementById('openChatBtn').onclick = ()=> chatPanel.classList.add('open');
document.getElementById('closeChat').onclick = ()=> chatPanel.classList.remove('open');

// ---- Send your own message ----
document.getElementById('sendBtn').onclick = ()=>{
  const input = document.getElementById('chatInput');
  if(input.value.trim() !== ""){
    match.spectatorChat.push({ by:"You", text:input.value });
    input.value = "";
    renderChat();
  }
};
