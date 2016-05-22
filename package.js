Package.describe({
	name: 'simply:strict-reactive-var',
	version: '1.1.0',
	summary: 'Thin strictly type checking wrapper around reactive-var.',
	git: 'https://github.com/simplyGits/strict-reactive-var',
	documentation: 'README.md',
})

Package.onUse(function(api) {
	api.versionsFrom('1.3.2.4')
	api.use([
		'reactive-var',
		'ecmascript',
	])
	api.mainModule('strict-reactive-var.js')
})

Package.onTest(function(api) {
	api.use('tinytest')
	api.use('simply:strict-reactive-var')
	api.addFiles('strict-reactive-var-tests.js')
})
