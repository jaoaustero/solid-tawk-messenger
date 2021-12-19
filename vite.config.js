const path = require('path')
const { defineConfig } = require('vite');
const solidPlugin = require('vite-plugin-solid');

export default defineConfig({
	plugins : [solidPlugin()],
	build : {
		lib : {
			entry : path.resolve(__dirname, 'src/index.js'),
			name : 'solid-tawk-messenger',
			fileName : ($format) => `solid-tawk-messenger.${$format}.js`
		}
	}
});
