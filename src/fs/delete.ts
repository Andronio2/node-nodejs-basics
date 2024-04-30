import { rm } from 'fs/promises';
import { join } from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILENAME = 'fileToRemove.txt';

const remove = async () => {
    try {
        await rm(join(__dirname, 'files', FILENAME));
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
