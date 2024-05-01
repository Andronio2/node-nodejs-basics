import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { createHash } = await import('node:crypto');

const algo = 'sha256';

const calculateHash = async () => {
    const hash = createHash(algo);
    hash.setEncoding('hex');
    const input = createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8');
    return pipeline(input, hash, process.stdout);
};

await calculateHash();
