const parseEnv = () => {
    const env = process.env;
    Object.entries(env).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) console.log(`${key}=${value}`);
    });
};

parseEnv();
