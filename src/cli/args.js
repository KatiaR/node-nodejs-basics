const parseArgs = () => {
    const cliArgs = process.argv.slice(2);
		cliArgs.forEach((arg, ind) => {
			if (arg.startsWith("--")) {
				const prop = cliArgs[ind].substring(2);
				const value = cliArgs[ind + 1];
				console.log(`${prop} is ${value}`);
			}
		});
    
};

parseArgs();