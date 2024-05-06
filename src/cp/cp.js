import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const spawnChildProcess = async (args) => {
//     // Write your code here
// };

// // Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
import { fork } from 'node:child_process';

const file = join(__dirname, 'files', 'script.js');
const child = fork(file, process.argv.slice(2), { silent: true });

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`детский процесс завершился с кодом ${code}`);
});

child.stdin.write('hello');
setTimeout(() => {
    child.stdin.write('CLOSE');
}, 1000);
