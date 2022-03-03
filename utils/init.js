const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `discordjs-bot-cli`,
		tagLine: `by Timtendo12`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#5865f2',
		color: '#ffffff',
		bold: true,
		clear
	});
};
