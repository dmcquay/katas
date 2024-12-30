import { createHash } from 'node:crypto';

function computeSHA256Hash(data: string): string {
    const hash = createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

type Block = {
    index: number;
    data: string;
    previousHash: string;
    hash: string;
    nonce: number;
}

function createBlock(index: number, data: string, previousHash: string): Block {
    let nonce = 0;
    let hash: string;

    do {
        nonce++;
        hash = computeSHA256Hash(`${index}${data}${previousHash}${nonce}`);
    } while (!hash.startsWith('0000')); // Example condition for proof of work

    const block: Block = {
        index,
        data,
        previousHash,
        hash,
        nonce
    };
    return block;
}

function createGenesisBlock(): Block {
    return createBlock(0, 'Genesis Block', '0');
}

function createNextBlock(previousBlock: Block, data: string): Block {
    return createBlock(previousBlock.index + 1, data, previousBlock.hash);
}

const blockchain: Block[] = [createGenesisBlock()];
 
for (let i = 0; i < 100; i++) {
    blockchain.push(createNextBlock(blockchain[blockchain.length - 1], `Transaction Data ${i}...`));
    // console.log(`Block ${i + 1} has been added to the blockchain! Nonce: ${blockchain[blockchain.length - 1].nonce}`);
}