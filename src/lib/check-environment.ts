export function isSQLite3VFSAvailable(): boolean {
	if (!globalThis.SharedArrayBuffer || !globalThis.Atomics) {
		return false;
	} else if ('undefined' === typeof WorkerGlobalScope) {
		return false;
	} else if (
		!globalThis.FileSystemHandle ||
		!globalThis.FileSystemDirectoryHandle ||
		!globalThis.FileSystemFileHandle ||
		!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle ||
		!navigator?.storage?.getDirectory
	) {
		return false;
	}
	return true;
}
