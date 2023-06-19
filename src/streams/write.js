/** @format */

import { createWriteStream } from "node:fs";

const write = async () => {
	const writeStream = createWriteStream(`src/streams/files/fileToWrite.txt`);
	process.stdin.pipe(writeStream);
	writeStream.on("finish", () => {
		console.log("Completed");
	});
	writeStream.on("error", (error) => {
		console.error(`Error: ${error}`);
	});
};

await write();
