const { ethers } = require('ethers');

async function testRpc() {
  try {
    const provider = new ethers.JsonRpcProvider('https://sepolia.base.org');
    const blockNumber = await provider.getBlockNumber();
    console.log('Connected to Base Sepolia! Current Block:', blockNumber);
    const bal = await provider.getBalance('0x64367e3e4A0A7bDb0A05b7286fea5f276F0c2Bf4');
    console.log('Balance:', ethers.formatEther(bal), 'ETH');
  } catch (err) {
    console.error('RPC Error:', err.message);
  }
}
testRpc();
