/** @format */

import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
	const filePath = `src/hash/files/fileToCalculateHashFor.txt`;
	const hash = createHash("sha256");
	try {
		const stream = await createReadStream(filePath);
		stream.on("readable", () => {
			const data = stream.read();
			if (data) hash.update(data);
			else {
				console.log(`SHA256 hash of ${filePath}: ${hash.digest("hex")}`);
			}
		});
	} catch (err) {
		console.error(err);
	}
};

await calculateHash();
