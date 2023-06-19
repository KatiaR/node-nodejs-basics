const parseEnv = () => {
	    const prefix = "RSS_";
			const environmentVariables = process.env;
			Object.keys(environmentVariables).forEach((key) => {
				if (key.startsWith(prefix)) {
					console.log(`${key}=${environmentVariables[key]}`);
				}
			});
};

parseEnv();