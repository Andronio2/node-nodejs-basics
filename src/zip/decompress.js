import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { unzip, createUnzip } from 'zlib';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IN_FILENAME = 'archive.gz';
const OUT_FILENAME = 'fileToDecompress.txt';

const decompress = async () => {
    const readStream = createReadStream(join(__dirname, 'files', IN_FILENAME));
    const writeStream = createWriteStream(join(__dirname, 'files', OUT_FILENAME));
    const decompressStream = createUnzip();
    await pipeline(readStream, decompressStream, writeStream);
};

await decompress();
