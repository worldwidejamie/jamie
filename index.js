#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic
const twitterColor = chalk.hex(`#0077b5`).bold.inverse;


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
log()