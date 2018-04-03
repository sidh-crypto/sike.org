#!/usr/bin/env node

var Metalsmith  = require('metalsmith');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var sass        = require('metalsmith-sass');

Metalsmith(__dirname)
    .metadata({
	sitename: "SIKE",
	siteurl: "http://sike.org/",
	description: "SIKE",
	generatorname: "Metalsmith",
	generatorurl: "http://metalsmith.io/"
    })
    .source('./src')
    .ignore('*~')
    .destination('./build')
    .clean(true)
    .use(sass({
	outputStyle: "expanded"
    }))
    .use(markdown())
    .use(// This plugin automatically generates a list of internal anchors
	(files, m, done) => {
	for (let f in files) {
	    let file = files[f];
	    let re = /<h([2-3])[^>]+id="([^"]+)".*?>(.*?)<\/h\1>/g;
	    file.anchors = [];
	    let m = re.exec(file.contents);
	    while (m) {
		file.anchors.push({ level: parseInt(m[1]), id: m[2], text: m[3] });
		m = re.exec(file.contents);
	    }
	}
	done();
    })
    .use(layouts())
    .build(function(err) {
	if (err) throw err;
    });
