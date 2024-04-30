import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILENAME = 'fileToRead.txt';

const read = async () => {
    try {
        const content = await readFile(join(__dirname, 'files', FILENAME), 'utf-8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
