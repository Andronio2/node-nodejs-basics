import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises'
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IN_FILENAME = 'fileToCompress.txt';
const OUT_FILENAME = 'archive.gz';

const compress = async () => {
    const readStream = createReadStream(join(__dirname, 'files', IN_FILENAME), 'utf-8');
    const writeStream = createWriteStream(join(__dirname, 'files', OUT_FILENAME));
    const compressStream = createGzip();
    return pipeline(readStream, compressStream, writeStream);
};

await compress();