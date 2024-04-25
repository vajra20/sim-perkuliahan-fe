// Function Api Url
export function apiUrl() {
	return import.meta.env.VITE_REACT_API_URL;
}

// Date
export function formatOnlyDate(date) {
	if (isNaN(date.getTime())) {
		return "--";
	}

	const day = date.getDate().toString().padStart(2, "0");
	return `${day}`;
}

export function formatOnlyMonth(date) {
	if (isNaN(date.getTime())) {
		return "--";
	}

	const months = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];

	const monthIndex = date.getMonth();
	const month = months[monthIndex];

	const year = date.getFullYear();
	return `${month} ${year}`;
}

export function formatOnlyTime(date) {
	if (isNaN(date.getTime())) {
		return "--";
	}

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
}

// Specific Date Time
export function formatDateTime(date) {
	if (isNaN(date.getTime())) {
		return "--/--/----";
	}

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${day}/${month}/${year} || ${hours}:${minutes}`;
}

export function formatTime(date) {
	if (isNaN(date.getTime())) {
		return "--/--/----";
	}

	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
}

// Date Time
export function formatDate(date) {
	if (isNaN(date.getTime())) {
		return "--/--/----";
	}

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

// Get File Extension
export function getFileExtension(fileName) {
	return `${fileName.split(".").pop()}`;
}

// Check File Extension
export function pictureFile(fileName) {
	const fileExtension = getFileExtension(fileName);

	switch (fileExtension) {
		case "png":
			return (
				<img
					src="/public/image.png"
					alt="PNG Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);

		case "pdf":
			return (
				<img
					src="/public/pdf.png"
					alt="PDF Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);

		case "ppt":
			return (
				<img
					src="/public/ppt.png"
					alt="PNG Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);

		case "docs":
			return (
				<img
					src="/public/word.png"
					alt="PNG Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);

		case "xlx":
			return (
				<img
					src="/public/excel.png"
					alt="PNG Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);

		default:
			return (
				<img
					src="/public/file-not-found.png"
					alt="PNG Icon"
					className="w-full h-full m-0 object-contain"
				/>
			);
	}
}
