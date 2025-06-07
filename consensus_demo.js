// consensus_demo.js
// Proof of Work
const miners = [
  { name: 'Miner1', power: Math.floor(Math.random() * 100) },
  { name: 'Miner2', power: Math.floor(Math.random() * 100) },
  { name: 'Miner3', power: Math.floor(Math.random() * 100) }
];
const powWinner = miners.reduce((max, current) => 
  max.power > current.power ? max : current
);
console.log(`PoW Winner: ${powWinner.name} (Power: ${powWinner.power})`);

// Proof of Stake
const stakers = [
  { name: 'Staker1', stake: Math.floor(Math.random() * 100) },
  { name: 'Staker2', stake: Math.floor(Math.random() * 100) },
  { name: 'Staker3', stake: Math.floor(Math.random() * 100) }
];
const posWinner = stakers.reduce((max, current) => 
  max.stake > current.stake ? max : current
);
console.log(`PoS Winner: ${posWinner.name} (Stake: ${posWinner.stake})`);

// Delegated Proof of Stake
const delegates = ['DelegateA', 'DelegateB', 'DelegateC'];
const votes = {
  DelegateA: Math.floor(Math.random() * 10),
  DelegateB: Math.floor(Math.random() * 10),
  DelegateC: Math.floor(Math.random() * 10)
};
const dposWinner = Object.entries(votes).reduce((max, current) => 
  current[1] > max[1] ? current : max
)[0];
console.log(`DPoS Winner: ${dposWinner} (Votes: ${votes[dposWinner]})`);
