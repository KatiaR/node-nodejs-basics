/** @format */

import { readFile } from "node:fs/promises";
import { errorMessage, sourceDirectory } from "./constants.js";
import { checkFileDoesNotExists } from "./utils.js";

const read = async () => {
	const sourceFile = `${sourceDirectory}/fileToRead.txt`;
	checkFileDoesNotExists(sourceFile, errorMessage);
	try {
		const contents = await readFile(sourceFile, "utf8");
		console.log(contents);
	} catch (err) {
		console.error(err.message);
	}
};

await read();
