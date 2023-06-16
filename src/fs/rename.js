/** @format */

import { rename as renameFs } from "node:fs";
import { sourceDirectory, errorMessage } from "./constants.js";
import { checkFileDoesNotExists, checkFileExists } from "./utils.js";

const rename = async () => {
	const sourceFile = `${sourceDirectory}/wrongFilename.txt`;
	const targetFile = `${sourceDirectory}/properFilename.md`;

	checkFileDoesNotExists(sourceFile, errorMessage);
	checkFileExists(targetFile, errorMessage);

	await renameFs(sourceFile, targetFile, (err) => {
		if (err) throw err;
	});
};

await rename();
