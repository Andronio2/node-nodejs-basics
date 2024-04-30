import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile, mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILENAME = 'fresh.txt';
const DIRNAME = 'files';

const create = async () => {
    try {
        await mkdir(DIRNAME, { recursive: true });
        await writeFile(join(__dirname, DIRNAME, FILENAME), 'I am fresh and young', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};
await create();
