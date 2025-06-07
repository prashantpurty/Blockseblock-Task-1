// mining_simulation.js
const crypto = require('crypto');

class Block {
    constructor(index, data, previousHash) {
        this.index = index;
        this.timestamp = Date.now();
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

    mineBlock(difficulty) {
        const target = '0'.repeat(difficulty);
        let attempts = 0;
        const startTime = Date.now();
        
        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
            attempts++;
        }
        
        const endTime = Date.now();
        console.log(`Block mined with nonce ${this.nonce}`);
        console.log(`Attempts: ${attempts}`);
        console.log(`Time elapsed: ${(endTime - startTime)/1000} seconds`);
    }
}

// Mine block with difficulty 4
const block = new Block(1, "Mining Demo", "0");
block.mineBlock(4);
