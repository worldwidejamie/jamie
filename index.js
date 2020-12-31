#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome');
welcome({
	title: pkgJSON.name,
	tagline: `Get to know Jamie`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	bold: true,
	clear: true
})

console.log(`Jamie Smith

Very cool person. Loves eating cookies. Medium smart.

LinkedIn: https://linkedin.com/in/worldwidejamie`)