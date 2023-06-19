/** @format */
import fs from "fs";
import { readdir } from "node:fs/promises";
import { targetDirectory, sourceDirectory, errorMessage } from "./constants.js";
import { checkExistenceDirectory } from "./utils.js";

const callback = (err) => {
	if (err) {
		console.error(err);
	}
};

const createTargetDirectory = () => {
	if (!fs.existsSync(targetDirectory)) {
		fs.mkdirSync(targetDirectory);
	}
};

const copy = async () => {
	await checkExistenceDirectory(targetDirectory, sourceDirectory, errorMessage);
	try {
		await createTargetDirectory();
		const filesSourceDirectory = await readdir(sourceDirectory);
		filesSourceDirectory.forEach((file) => {
			fs.copyFile(
				`${sourceDirectory}/${file}`,
				`${targetDirectory}/${file}`,
				callback
			);
		});
	} catch (err) {
		console.error(err);
	}
};

await copy();
