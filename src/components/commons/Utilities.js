

export const Capitalize = (str) => {
	str = str.replace(/-/g, ' ');
	const catCase = str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
	return catCase;
	};