/** @format */

import { unlink } from "node:fs";
import { errorMessage, sourceDirectory } from "./constants.js";
import { throwErrorWithErrMsg } from "./utils.js";

const remove = async () => {
	const fileToRemove = `${sourceDirectory}/fileToRemove.txt`;
	unlink(fileToRemove, (err) => {
		if (err) throwErrorWithErrMsg(errorMessage);
	});
};

await remove();
