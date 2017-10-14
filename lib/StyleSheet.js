export const globalStyleSheet = () => {
	try {
		return fs.readFileSync('.next/css/commons.css');
	} catch (e) { /* No file */ }
}

export default(path) => {
	const options = {
		// Used in production
		cssPath: `.next/css${path === '/' ? '/index' : path}.css`,
		// Used in development
		stylePath: '.next/css/style.css'
	}

	try {
		if (process.env.NODE_ENV !== 'production') {
			return fs.readFileSync(options.stylePath);
		} else {
			return fs.readFileSync(options.cssPath);
		}
	} catch (e) { /* No file */ }
}
