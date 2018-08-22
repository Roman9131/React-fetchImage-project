const conf = process.env.NODE_ENV === 'development' ?
		require('./configureStore.dev') : null;

module.exports = conf;
