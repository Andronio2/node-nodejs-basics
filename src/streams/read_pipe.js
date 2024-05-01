import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    return pipeline(readStream, process.stdout);
};

await read();
