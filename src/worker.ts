import { SQLiteOpfsDriver } from './drivers/sqlite-opfs-driver.js';
import { SQLiteOpfsSahDriver } from './drivers/sqlite-opfs-sah-driver.js';
import { isSQLite3VFSAvailable } from './lib/check-environment.js';
import { SQLocalProcessor } from './processor.js';

const driver = isSQLite3VFSAvailable()
	? new SQLiteOpfsDriver()
	: new SQLiteOpfsSahDriver();
const processor = new SQLocalProcessor(driver);

self.onmessage = (message) => {
	processor.postMessage(message);
};

processor.onmessage = (message, transfer) => {
	self.postMessage(message, transfer);
};
