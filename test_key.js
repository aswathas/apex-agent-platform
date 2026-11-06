const { ethers } = require('ethers');

// Generate or load persistent demo keypair
const wallet = ethers.Wallet.createRandom();
console.log("Agent Public Address:", wallet.address);
console.log("Agent Private Key:   ", wallet.privateKey);
