import { createWriteStream } from 'node:fs';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILENAME = 'fileToWrite.txt';
const write = async () => {
    const fstream = createWriteStream(join(__dirname, 'files', FILENAME));
    process.stdin.on('data', (chunk) => {
        fstream.write(chunk);
        const str = chunk.toString().toLowerCase();
        if (str.includes('close')) process.exit(0);
    });
    process.on('exit', () => {
        fstream.end();
    });
};

await write();
