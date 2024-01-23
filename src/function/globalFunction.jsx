// Function Api Url
export function apiUrl() {
	return import.meta.env.VITE_REACT_API_URL;
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
