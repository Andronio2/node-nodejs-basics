import { mkdir, copyFile, readdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = 'files';
const destination = 'files_copy';

const copy = async () => {
    console.log('filename', __filename);
    console.log('dirname', __dirname);

    try {
        await mkdir(join(__dirname, destination));
        const fileList = await readdir(join(__dirname, source), { encoding: 'utf-8' });
        console.log(fileList);
        for (const file of fileList) {
            await copyFile(join(__dirname, source, file), join(__dirname, destination, file));
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
