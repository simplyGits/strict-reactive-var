Tinytest.add('be able to initialized with and without `new`', function (test) {
	var a = new SReactiveVar(null)
	var b = SReactiveVar(null)

	test.instanceOf(a, SReactiveVar)
	test.instanceOf(b, SReactiveVar)

	test.equal(a.get(), b.get())
	test.equal(a._pattern, b._pattern)
})

Tinytest.add('set and retrieve values', function (test) {
	var val = new SReactiveVar(Number, 0)
	test.equal(val.get(), 0)
	val.set(420)
	test.equal(val.get(), 420)
})

Tinytest.add('check types', function (test) {
	var val = new SReactiveVar(Number, 0)
	test.equal(val.get(), 0)

	var error = null
	try {
		val.set('5')
	} catch (e) {
		// we should error and hit this line.
		error = e
	}
	test.isNotNull(error)
})
