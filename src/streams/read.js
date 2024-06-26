import { createReadStream } from 'node:fs';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    return new Promise((resolve, reject) => {
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        readStream.on('end', () => {
            resolve();
        });
        readStream.on('error', (err) => {
            reject(err);
        });
    });
};

await read();
