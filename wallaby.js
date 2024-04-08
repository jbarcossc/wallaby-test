module.exports = () => {
	return {
		files: ['index.js'],
		tests: ['tests.js'],
		env: {
			kind: 'chrome',
		},
		debug: true,
	};
};
