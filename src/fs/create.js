/** @format */

import fs, { access, constants } from "node:fs/promises";

const checkFileExists = async (newFilePath, errorMessage) => {
	try {
		await access(newFilePath, constants.F_OK);
		throw new Error(errorMessage);
	} catch (err) {
		if (err.code !== "ENOENT") {
			console.error(err);
		}
	}
};

const create = async () => {
	const newFilePath = "src/fs/files/fresh.txt";
	const newFileContent = "I am fresh and young";
	const errorMessage = "FS operation failed";

	checkFileExists(newFilePath, errorMessage);

	try {
		await fs.writeFile(newFilePath, newFileContent);
	} catch (err) {
		console.error(err);
	}
};

await create();
