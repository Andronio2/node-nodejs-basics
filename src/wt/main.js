import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const workerList = new Array(cpus().length)
        .fill(0)
        .map((_, index) => new Worker(join(__dirname, 'worker.js'), { workerData: index + 10 }));
    const promiseList = workerList.map((worker) => {
        return new Promise((resolve, reject) => {
            worker.on('message', (data) => {
                resolve(data);
            });
            worker.on('error', (err) => {
                reject(err);
            });
        });
    });
    return Promise.allSettled(promiseList)
        .then((results) =>
            results.map((result) => ({
                status: result.status === 'fulfilled' ? 'resolved' : 'error',
                data: result.status === 'fulfilled' ? result.value : null,
            })),
        )
        .then((results) => {
            console.log(results);
        });
};

// const worker = new Worker(join(__dirname, 'worker.js'));
// worker.on('message', (data) => {
//     console.log('from child', data);
// });
await performCalculations();
