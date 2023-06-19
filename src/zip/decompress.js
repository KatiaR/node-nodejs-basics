/** @format */
import fs from "fs";
import zlib from "zlib";
const decompress = async () => {
	const readStreamFileToDecompress = fs.createReadStream(
		"src/zip/files/archive.gz"
	);
	const writeStreamFileToCompress = fs.createWriteStream(
		"src/zip/files/fileToCompress.txt"
	);
	const gzip = zlib.createGunzip();

	readStreamFileToDecompress.pipe(gzip).pipe(writeStreamFileToCompress);
};

await decompress();
