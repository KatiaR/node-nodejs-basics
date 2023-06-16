/** @format */
import fs from "fs";
import { access, constants } from "node:fs/promises";

export const checkExistenceDirectory = (
	targetDirectory,
	sourceDirectory,
	errorMessage
) => {
	if (fs.existsSync(targetDirectory) || !fs.existsSync(sourceDirectory)) {
		throwErrorWithErrMsg(errorMessage);
	}
};

export const checkFileExists = async (newFilePath, errorMessage) => {
	try {
		await access(newFilePath, constants.F_OK);
		throwErrorWithErrMsg(errorMessage);
	} catch (err) {
		if (err.code !== "ENOENT") {
			console.error(err);
		}
	}
};

export const checkFileDoesNotExists = async (filePath, errorMessage) => {
	try {
		await access(filePath, constants.F_OK);
	} catch (err) {
		throwErrorWithErrMsg(errorMessage);
	}
};

export const throwErrorWithErrMsg = (errorMessage) => {
	throw new Error(errorMessage);
};
