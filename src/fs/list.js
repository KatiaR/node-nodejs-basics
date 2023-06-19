/** @format */

import { readdir } from "node:fs/promises";
import { checkFileDoesNotExists } from "./utils.js";
import { sourceDirectory, errorMessage } from "./constants.js";
import fs from "fs/promises";

const readFileItems = async (sourceDirectory) => {
	try {
		const filesSourceDirectory = await readdir(sourceDirectory);
		filesSourceDirectory.forEach(async (file) => {
			const fileLocation = `${sourceDirectory}/${file}`;
			const stats = await fs.stat(fileLocation);

			if (stats.isFile()) {
				console.log(file);
			} else if (stats.isDirectory()) {
				readFileItems(fileLocation);
			}
		});
	} catch (err) {
		console.error(err);
	}
};

const list = async () => {
	checkFileDoesNotExists(sourceDirectory, errorMessage);
	readFileItems(sourceDirectory);
};

await list();
