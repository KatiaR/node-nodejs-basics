/** @format */

import { Worker, workerData, isMainThread, parentPort } from "worker_threads";
import os from "os";

const createWorker = (number) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker("./src/wt/worker.js", { workerData: number });
		worker.on("message", (result) =>
			resolve({ status: "resolved", data: result })
		);
		worker.on("message", (error) =>
			reject({ status: "error", data: null, error })
		);
	});
};

const performCalculations = async () => {
	if (isMainThread) {
		const numberCPUs = os.cpus().length;
		const incrementalNumber = 10;
		const workers = [];

		for (let i = 0; i < numberCPUs; i++) {
			const number = incrementalNumber + i;
			const workerPromise = createWorker(number);
			workers.push(workerPromise);
		}

		try {
			const results = await Promise.all(workers);
			console.log(results);
		} catch (error) {
			console.error(error);
		}
	}
};

await performCalculations();
