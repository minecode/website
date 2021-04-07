const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images')

module.exports = withCSS(withSass());

module.exports = withImages({
	esModule: true,
})

module.exports = {
	env: {
		REACT_APP_APIKEY: '97b2a912e67b0ae98cd5:e644319491835bcaa1dd08693df8185e6c950e6a',
	}
};

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/minecode/minecode.github.io/master/' : '',
}
