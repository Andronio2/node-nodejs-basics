const transform = async () => {
    process.stdin.on('data', (chunk) => {
        const str = chunk.toString();
        process.stdout.write(str.split('').reverse().join(''));
        if (str.includes('close')) process.exit(0);
    });
    process.on('exit', () => {
        process.stdout.end();
    });
};

await transform();
