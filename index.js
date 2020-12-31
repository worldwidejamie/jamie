#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const logSymbols = require( 'log-symbols' );
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic
const twitterColor = chalk.hex(`#0077b5`).bold.inverse;
const sym = require('log-symbols')

// Alerts
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.yellow.inverse;
const error = chalk.red.inverse


welcome({
	title: `Jamie Smith`,
	tagline: `Get to know Jamie`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	bold: true,
	clear: true
})



log(`
 
${italic('Very cool person. Loves eating cookies. Medium smart.')}

${twitterColor(` LinkedIn `)}: ${dim('https://linkedin.com/in/worldwidejamie')}
`)

log(chalk.green.underline.inverse(`This is Green`));
console.log(`
${sym.success} ${success(`SUCCESS`)}: Thanks for checking out my cli.

${sym.info} ${info(`INFO`)}: This literally does nothing except show my name and LinkedIn URL

${sym.warning} ${warning(`WARNING`)}: This will be boring for you, probably.

${sym.error} ${error(`ERROR`)}: It's broken.
`)