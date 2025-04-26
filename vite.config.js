const path = require('path')
const { defineConfig } = require('vite');
const solidPlugin = require('vite-plugin-solid');

export default defineConfig({
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		lib: {
			entry: path.resolve(__dirname, 'src/Index.js'),
			name: 'solid-tawk-messenger',
			fileName: ($format) => `solid-tawk-messenger.${$format}.js`,
		},
		rollupOptions: {
			external: ['solid-js']
		}
	},
});
