/** @format */

import fs from "node:fs/promises";
import { errorMessage, newFileContent } from "./constants.js";
import { checkFileExists } from "./utils.js";

const create = async () => {
	const newFilePath = "src/fs/files/fresh.txt";
	checkFileExists(newFilePath, errorMessage);

	try {
		await fs.writeFile(newFilePath, newFileContent);
	} catch (err) {
		console.error(err);
	}
};

await create();
