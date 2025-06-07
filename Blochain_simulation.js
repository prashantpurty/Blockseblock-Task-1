// blockchain_simulation.js
const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash('sha256')
            .update(
                this.index +
                this.timestamp +
                JSON.stringify(this.data) +
                this.previousHash +
                this.nonce
            )
            .digest('hex');
    }
}

// Create blockchain with 3 blocks
let blockchain = [createGenesisBlock()];

function createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0');
}

// Add blocks
for (let i = 1; i <= 2; i++) {
    let prevBlock = blockchain[blockchain.length - 1];
    let newBlock = new Block(i, Date.now(), `Block ${i} Data`, prevBlock.hash);
    blockchain.push(newBlock);
}

// Display blocks
console.log("Initial Blockchain:");
blockchain.forEach(block => {
    console.log(`Block ${block.index}:`);
    console.log(`Hash: ${block.hash}`);
    console.log(`Previous Hash: ${block.previousHash}\n`);
});

// Tamper with Block 1
console.log("\nTampering Block 1...");
blockchain[1].data = "Tampered Data";
blockchain[1].hash = blockchain[1].calculateHash();

// Validate chain
console.log("\nValidation Results:");
for (let i = 1; i < blockchain.length; i++) {
    if (blockchain[i].previousHash !== blockchain[i-1].hash) {
        console.log(`❌ Block ${i} is INVALID!`);
    } else {
        console.log(`✅ Block ${i} is valid`);
    }
}
