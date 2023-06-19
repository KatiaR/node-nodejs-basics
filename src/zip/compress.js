/** @format */
import fs from "fs";
import zlib from "zlib";

const compress = async () => {
	const streamFileToCompress = fs.createReadStream(
		"src/zip/files/fileToCompress.txt"
	);
	const archiveStream = fs.createWriteStream("src/zip/files/archive.gz");
	const gzip = zlib.createGzip();

	streamFileToCompress.pipe(gzip).pipe(archiveStream);
};

await compress();
