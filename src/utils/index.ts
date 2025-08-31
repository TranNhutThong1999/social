import { AVATAR_COLORS } from "../constants";

export const generateAvatarColor = (name: string, isDark = false): string => {
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}

	const colorIndex = Math.abs(hash) % AVATAR_COLORS.length;
	return isDark
		? AVATAR_COLORS[colorIndex].dark
		: AVATAR_COLORS[colorIndex].light;
};

export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('vi-VN');
};