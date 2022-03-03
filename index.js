#!/usr/bin/env node

/**
 * discordjs-bot-cli
 * create a discord bot from command
 *
 * @author Timtendo12 <https://tim-slager.newdeveloper.nl>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
