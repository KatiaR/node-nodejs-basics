/** @format */
import fs from "fs";
import { readdir } from "node:fs/promises";
import { targetDirectory, sourceDirectory, errorMessage } from "./constants.js";

const callback = (err) => {
	if (err) {
		console.error(err);
	}
};

const checkExistenceDirectory = () => {
	if (fs.existsSync(targetDirectory) || !fs.existsSync(sourceDirectory)) {
		throw new Error(errorMessage);
	}
};

const createTargetDirectory = () => {
	if (!fs.existsSync(targetDirectory)) {
		fs.mkdirSync(targetDirectory);
	}
};

const copy = async () => {
	await checkExistenceDirectory();
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
