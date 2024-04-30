import { readdir } from 'fs/promises';
import { join } from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIRNAME = 'files';

const list = async () => {
    try {
        const fileList = await readdir(join(__dirname, DIRNAME));
        console.log(fileList);
    } catch (error) {
        console.log('erorr', error);
        throw new Error('FS operation failed');
    }
};

await list();
