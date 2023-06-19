/** @format */

import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
	const childProcess = spawn("node", ["src/cp/files/script.js", ...args], {
		stdio: ["pipe", "pipe", process.stdout],
	});

	process.stdin.pipe(childProcess.stdin);

	childProcess.stdout.on("data", (data) => {
		process.stdout.write(data);
	});

	childProcess.on("error", (error) => {
		console.error(error);
	});
};

spawnChildProcess(["someArgument1", "someArgument2"]);
