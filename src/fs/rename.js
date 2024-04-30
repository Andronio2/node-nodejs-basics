import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILENAME_OLD = 'wrongFilename.txt';
const FILENAME_NEW = 'properFilename.md';

const rename = async () => {
    try {
        await fs.rename(join(__dirname, 'files', FILENAME_OLD), join(__dirname, 'files', FILENAME_NEW));
    } catch (error) {
        console.log('error', error);
        // throw new Error('FS operation failed');
    }
};

await rename();
