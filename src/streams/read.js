/** @format */

import { createReadStream } from "node:fs";

const read = async () => {
	const readStream = createReadStream(`src/streams/files/fileToRead.txt`);
	readStream.on("data", (content) => {
		process.stdout.write(content);
	});
	readStream.on("end", () => {
		console.log("Completed");
	});
	readStream.on("error", (error) => {
		console.error(`Error: ${error}`);
	});
};

await read();
