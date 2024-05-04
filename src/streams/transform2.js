import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const trans = new Transform({
    transform(chunk, encoding, callback) {
        const chunkStringified = chunk.toString().trim();
        const rev = chunkStringified.split('').reverse().join('');
        this.push(rev + '\n');
        callback();
    },
});

const transform = async () => {
    return pipeline(process.stdin, trans, process.stdout);
};

await transform();
