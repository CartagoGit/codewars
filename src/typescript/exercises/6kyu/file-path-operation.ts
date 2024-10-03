//* https://www.codewars.com/kata/5844e0890d3bedc5c5000e54/train/typescript

export class FileMaster {
	public filepath: string;

	constructor(filepath: string) {
		this.filepath = filepath;
	}

	extension() {
		return this.filepath.split('.').pop();
	}

	filename() {
		return this.filepath.split('/').pop()?.split('.')[0];
	}

	dirpath() {
		return this.filepath.split('/').slice(0, -1).join('/') + '/';
	}
}
